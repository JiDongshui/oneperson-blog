// 用 DeepSeek 生成一篇垂直主题文章，写入 content-site/content/posts/
// 用法：node scripts/generate.js
// 环境变量：DEEPSEEK_API_KEY（必填，用于真实生成）；TOPIC（可选，默认主题）
// 无 DEEPSEEK_API_KEY 时进入 dry-run：生成一篇示例文章并退出 0（便于本地验证流程）
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.resolve(__dirname, '../content-site/content/posts');
const KEY = process.env.DEEPSEEK_API_KEY || '';
const TOPIC = process.env.TOPIC || 'Cross-Border Payments & Compliance for Solo Developers';

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60) || 'untitled';
}

function frontmatter(title, dateISO) {
  return `---
title: "${title}"
date: "${dateISO}"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---
`;
}

// 生成前端模板；body 为空时先用占位，避免 commit 空文件
function makeMarkdown(title, body) {
  return frontmatter(title, new Date().toISOString()) + '\n' + body;
}

async function main() {
  mkdirSync(POSTS_DIR, { recursive: true });

  let title, body;
  if (!KEY) {
    // ---- dry-run：无 key 时生成示例，验证闭环骨架 ----
    title = TOPIC;
    body = `> 本文件由 \`scripts/generate.js\` 在未配置 \`DEEPSEEK_API_KEY\` 时生成的 dry-run 示例，用于验证"生成→提交→构建→分发"流水线。
>
> 配置 GitHub repo Secret \`DEEPSEEK_API_KEY\` 后，定时任务会用 DeepSeek 生成真实正文。
\n## 占位正文\n\n（正文将由 DeepSeek 按主题 \`${TOPIC}\` 生成）\n`;
  } else {
    // ---- 真实生成：调用 DeepSeek ----
    const resp = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: 'You are a technical blogger for independent developers and one-person companies. Write concise, actionable, practical content in English as a Markdown technical article (600~900 words) with 3~5 section headings, and end with a "Next Steps" section. Output only the Markdown body, no front matter.' },
          { role: 'user', content: `主题：${TOPIC}` },
        ],
        temperature: 0.7,
      }),
    });
    if (!resp.ok) {
      console.error(`DeepSeek API 返回 ${resp.status}：${await resp.text()}`);
      process.exit(1);
    }
    const data = await resp.json();
    body = data?.choices?.[0]?.message?.content;
    if (!body) {
      console.error('DeepSeek 返回为空，退出');
      process.exit(1);
    }
    title = TOPIC;
  }

  const file = path.join(POSTS_DIR, `${new Date().toISOString().slice(0, 10)}-${slugify(title)}.md`);
  writeFileSync(file, makeMarkdown(title, body), 'utf8');
  console.log(`已生成文章：${file}${KEY ? '' : '（dry-run，未配置 DEEPSEEK_API_KEY）'}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
