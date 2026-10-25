// 把 content-site/content/posts/ 中待分发的文章发布到 DEV.to / Hashnode
// 用法：node scripts/distribute.js
// 环境变量：DEVTO_API_KEY / HASHNODE_API_KEY / HASHNODE_PUBLICATION_ID / SITE_BASE_URL
// 无 token 时进入 dry-run：只列出待分发文章并退出 0
// 发布成功后把结果写入 notify-result.json（供 workflow 发飞书通知）
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.resolve(__dirname, '../content-site/content/posts');
const DEVTO_KEY = process.env.DEVTO_API_KEY || '';
const HASHNODE_KEY = process.env.HASHNODE_API_KEY || '';
const HASHNODE_PUB_ID = process.env.HASHNODE_PUBLICATION_ID || '';
const BASE = process.env.SITE_BASE_URL || 'https://example.github.io/';

// 解析 frontmatter：返回 {meta, body}
function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].replace(/^"|"$/g, '');
  }
  return { meta, body: m[2] };
}

// 把文章标记为已分发
function markPublished(file, dest) {
  const full = path.join(POSTS_DIR, file);
  const text = readFileSync(full, 'utf8');
  const next = text.replace(/(^distribute:\s*)true/m, `$1false`).replace(/(^published:\s*).*$/m, `$1${dest}`);
  if (!/^published:/m.test(text)) {
    writeFileSync(full, text.replace(/(^distribute:\s*true$)/m, `$1\npublished: ${dest}`), 'utf8');
  } else {
    writeFileSync(full, next, 'utf8');
  }
  console.log(`  已标记发布：${file} -> ${dest}`);
}

async function publishDevto({ title, body, file }) {
  const resp = await fetch('https://dev.to/api/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'api-key': DEVTO_KEY },
    body: JSON.stringify({ article: { title, body_markdown: body, published: true } }),
  });
  if (!resp.ok) throw new Error(`DEV.to ${resp.status}: ${await resp.text()}`);
  const json = await resp.json();
  markPublished(file, 'devto');
  return { platform: 'devto', title, url: json.url };
}

async function publishHashnode({ title, body, file }) {
  const canonical = BASE;
  const query = `mutation PublishPost($input: PublishPostInput!) { publishPost(input: $input) { post { url } } }`;
  const resp = await fetch('https://api.hashnode.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: HASHNODE_KEY },
    body: JSON.stringify({
      query,
      variables: { input: { title, contentMarkdown: body, publicationId: HASHNODE_PUB_ID, canonicalUrl: canonical } },
    }),
  });
  const json = await resp.json();
  if (json.errors) throw new Error(`Hashnode: ${JSON.stringify(json.errors)}`);
  markPublished(file, 'hashnode');
  const url = json.data?.publishPost?.post?.url;
  return { platform: 'hashnode', title, url };
}

async function main() {
  if (!existsDir()) return;
  const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));
  const pending = [];
  for (const f of files) {
    const { meta, body } = parseFrontmatter(readFileSync(path.join(POSTS_DIR, f), 'utf8'));
    if (meta.distribute === 'true' && !meta.published) pending.push({ file: f, meta, body });
  }
  if (pending.length === 0) {
    console.log('没有待分发的文章（distribute:true 且未发布）。');
    return;
  }
  console.log(`待分发 ${pending.length} 篇：`);
  for (const p of pending) console.log(`  - ${p.file}（${p.meta.title || '无标题'}）`);

  const dry = !DEVTO_KEY && !HASHNODE_KEY;
  if (dry) {
    console.log('dry-run：未配置 DEVTO_API_KEY / HASHNODE_API_KEY，未真正发布。');
    return;
  }
  const published = [];
  for (const p of pending) {
    const title = p.meta.title || p.file;
    if (DEVTO_KEY) published.push(await publishDevto({ title, body: p.body, file: p.file }));
    if (HASHNODE_KEY && HASHNODE_PUB_ID) published.push(await publishHashnode({ title, body: p.body, file: p.file }));
  }
  if (published.length) {
    writeFileSync(path.resolve(process.cwd(), 'notify-result.json'), JSON.stringify(published, null, 2), 'utf8');
    console.log(`已写入 notify-result.json（${published.length} 条发布结果）`);
  }
  console.log('分发完成。');
}

function existsDir() {
  try { readdirSync(POSTS_DIR); return true; } catch { return false; }
}

main().catch((e) => { console.error(e); process.exit(1); });
