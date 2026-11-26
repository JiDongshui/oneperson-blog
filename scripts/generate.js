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

// 选题池：按日期轮换，避免每天生成同一标题
// （此前 TOPIC 硬编码单一主题，导致 DEV.to 上 30 篇标题完全相同）
const TOPICS = [
  'How Solo Developers Can Accept International Payments Without High Fees',
  'Why One-Person Companies Should Automate Their Content Pipeline',
  'Stripe vs Paddle vs Lemon Squeezy: A Practical Comparison for Indie Makers',
  'Pricing Your First SaaS Product as a Solo Founder',
  'Tax and Invoicing Basics for Solo Developers Selling Worldwide',
  'How to Launch a Digital Product in a Single Weekend',
  'Using GitHub Actions to Run a One-Person Business on Autopilot',
  'A Beginner Guide to Writing Landing Pages That Convert',
  'SEO Basics for Solo Developer Blogs',
  'How to Handle Refunds and Chargebacks as an Indie Seller',
  'Building a Newsletter Audience Before You Even Have a Product',
  'Choosing the Right Domain and Branding for a One-Person Company',
  'How to Protect Your Indie SaaS from Fraud and Abuse',
  'A Realistic Look at Passive Income for Solo Developers',
  'How to Onboard Your First Paying Customers',
  'Simple Analytics Every Solo Founder Should Track',
  'How to Write Product Documentation That Actually Sells',
  'Legal Checklist Before Launching a Global Digital Product',
  'Time Management Systems That Work for Solo Founders',
  'How to Outsource Your First Tasks Without Losing Control',
  'Turning a Technical Skill into a Recurring Revenue Product',
  'Common Mistakes New Indie SaaS Founders Make',
  'How to Build Trust With Customers as a One-Person Brand',
  'A Minimal Tech Stack for a Solo Software Business',
];

function pickTopicByDate() {
  const now = new Date();
  const start = Date.UTC(now.getUTCFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start) / 86400000);
  return TOPICS[dayOfYear % TOPICS.length];
}

const TOPIC = (process.env.TOPIC && process.env.TOPIC.trim()) || pickTopicByDate();

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
