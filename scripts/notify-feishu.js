// 把分发结果通知到飞书群机器人（webhook）
// 环境变量：FEISHU_WEBHOOK
// 读取 distribute.js 写入的 notify-result.json（存在=本次有发布；否则=无新发布）
import { readFileSync } from 'node:fs';
import path from 'node:path';

const webhook = process.env.FEISHU_WEBHOOK || '';
if (!webhook) {
  console.log('未配置 FEISHU_WEBHOOK，跳过飞书通知。');
  process.exit(0);
}

let text;
try {
  const items = JSON.parse(readFileSync(path.resolve(process.cwd(), 'notify-result.json'), 'utf8'));
  if (Array.isArray(items) && items.length) {
    text =
      '✅ 已自动发布到开发者社区\n\n' +
      items.map((i) => `📝 《${i.title}》\n🔗 ${i.url || i.platform || ''}`).join('\n\n');
  } else {
    text = '✅ 分发完成（本次无新发布）';
  }
} catch {
  text = '✅ 分发完成（本次无新发布）';
}

const r = await fetch(webhook, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ msg_type: 'text', content: { text } }),
});
const body = await r.text();
console.log(`飞书通知状态：${r.status} ${body}`);
if (!r.ok) process.exit(1);
