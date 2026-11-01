---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-01T10:23:26.549Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
distributed: devto
---

# Cross-Border Payments & Compliance for Solo Developers

Shipping a product is the easy part. Getting paid from customers in 40 countries without tripping over tax laws, sanctions lists, or frozen accounts is where solo developers lose weekends. This guide covers the practical stack: what to use, what to avoid, and what to automate.

## Pick Your Payment Rail Before You Pick Your Bank

Most solo devs default to Stripe and stop there. That's fine for card payments, but it's not the whole picture:

- **Stripe / Paddle / Lemon Squeezy** — best for SaaS subscriptions. Paddle and Lemon Squeezy act as **Merchant of Record (MoR)**, meaning *they* handle sales tax/VAT collection and remittance. For a one-person company, this is worth the ~5% fee. You trade margin for not filing VAT returns in 27 EU countries.
- **Stripe direct** — cheaper (~2.9% + 30¢) but you become responsible for tax registration thresholds. The EU's OSS scheme and UK VAT registration (threshold £90k, but digital services have *zero* threshold for non-UK sellers) will bite you.
- **Wise / Payoneer** — for receiving payouts from marketplaces or clients paying by bank transfer. Not a checkout solution.
- **Crypto (USDC via Coinbase Commerce)** — niche, but some devs use it to reach customers in regions where cards fail. Only if you're comfortable with the accounting headache.

**Rule of thumb:** If you sell B2C digital products globally and want to sleep at night, use an MoR. If you sell B2B to a handful of known clients, invoice directly and let them wire you.

## Know Your Tax Obligations (or Outsource Them)

The three tax regimes that catch solo devs:

1. **EU VAT** — digital services to EU consumers are taxed at the *customer's* rate, not yours. An MoR handles this. If you go direct, register for OSS (One Stop Shop) via your home country's tax authority.
2. **US Sales Tax** — economic nexus rules mean you owe tax in a state once you cross thresholds (often $100k in sales or 200 transactions). Marketplaces and MoRs collect this for you; direct Stripe sales do not.
3. **Withholding tax** — if you're a non-US company selling to US businesses, they may withhold 30% unless you file a **W-8BEN-E**. Submit this to Stripe/Paddle early or you'll lose money silently.

If you're doing under ~$50k/year, an MoR is almost always cheaper than an accountant plus compliance software. Above that, run the numbers — the 5% MoR cut starts to hurt.

## Sanctions Screening and KYC: Don't Get Frozen

Payment processors will freeze your account if a customer turns out to be sanctioned. Two practical defenses:

- **Screen at signup, not at payout.** Use a lightweight API (e.g., OFAC's free SDN list, or services like Sanctions.io / ComplyAdvantage if you have volume) to check customer names against sanctions lists. For most solo devs, a simple check against the US Treasury OFAC SDN list is enough.
- **Restrict by country.** Stripe and Paddle block sanctioned countries by default (Iran, North Korea, Syria, Crimea, etc.), but you should also block countries where you can't legally do business. Keep an explicit allowlist in your signup flow.

Also complete **KYC for your own account** the moment you open it. Upload your ID, business registration, and proof of address before you have revenue. Processors that ask for documents *after* you've accumulated a balance are the ones that freeze first.

```js
// Example: block signups from unsupported regions
const BLOCKED = new Set(["IR", "KP", "SY", "CU", "RU"]);
if (BLOCKED.has(req.body.country)) {
  return res.status(403).json({ error: "Region not supported" });
}
```

## Automate Invoicing and Reconciliation

Manual reconciliation is where solo devs waste the most time. Set up:

- **Invoicing via Stripe Invoicing or a tool like Invoice Ninja** — auto-generate PDFs with your VAT ID and the customer's.
- **Webhook-driven accounting** — pipe `invoice.paid` and `charge.refunded` events into a ledger (a simple Postgres table works). Don't rely on the dashboard; you need queryable data at tax time.
- **Currency handling** — always store the original currency and amount, plus the exchange rate and the settled amount in your home currency. Wise and Stripe both expose this in their APIs; capture it at transaction time, not later.
- **A monthly export** — CSV of all transactions per processor, reconciled against your bank statement. Automate this with a cron job that emails you a summary on the 1st.

## Next Steps

1. **Decide your model:** MoR (Paddle/Lemon Squeezy) vs. direct (Stripe). Write down the tax implications of each for your specific countries.
2. **Open the account and complete KYC today** — don't wait for your first sale.
3. **File your W-8BEN-E** if you're non-US and selling to US customers.
4. **Add country blocking and a sanctions check** to your signup flow.
5. **Build a minimal ledger** (one Postgres table: `id, processor, amount, currency, fx_rate, settled_amount, status, created_at`) and wire it to webhooks.
6. **Set a calendar reminder** to export and reconcile monthly. Fifteen minutes a month beats a panicked weekend before tax season.

The goal isn't to become a compliance expert — it's to build a boring, auditable pipeline so you can get back to shipping code.