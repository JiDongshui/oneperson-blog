// deploy 失败时主动通知飞书（董事长告警）——原来只在成功时通知
const webhook = process.env.FEISHU_WEBHOOK || '';
const wf = process.env.WORKFLOW || 'workflow';
if (!webhook) {
  console.log('未配置 FEISHU_WEBHOOK，跳过失败告警。');
  process.exit(0);
}
const text = `⚠️【内容闭环·失败告警】\n工作流 ${wf} 执行失败\n请到 GitHub Actions 查看日志定位原因（不要静默）`;
const r = await fetch(webhook, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ msg_type: 'text', content: { text } }),
});
const body = await r.text();
console.log(`失败通知状态：${r.status} ${body}`);
if (!r.ok) process.exit(1);
