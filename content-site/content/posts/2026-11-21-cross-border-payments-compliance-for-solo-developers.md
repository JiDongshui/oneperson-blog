---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-21T10:55:47.226Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You shipped a product, and the first paying customer lives in another country. Great — now you have to get money from their bank account into yours without tripping over sanctions lists, tax rules, or a frozen merchant account. This guide covers the practical stack a one-person company can actually manage.

## 1. Pick a Payment Processor Before You Write Code

The single most important decision is your merchant of record (MoR). For solo developers, the realistic options fall into three buckets:

- **Stripe (or a regional equivalent like Paddle, Lemon Squeezy, Razorpay):** Fastest integration, excellent docs, but you own the tax and compliance burden unless you use a tax-managed product.
- **Merchant of Record (Paddle, Lemon Squeezy, FastSpring):** They become the seller of record, handle VAT/GST/sales tax globally, and remit to you. You give up ~5% of revenue but offload an enormous compliance surface. For most solo devs selling SaaS or digital goods, this is the correct default.
- **Local processors:** Necessary for markets like Brazil (Pix), India (UPI/Razorpay), or China (Alipay/WeChat Pay). Add these only when a meaningful share of your traffic comes from those regions.

Avoid stacking three processors "just in case." Each one is a separate compliance relationship, a separate dispute process, and a separate set of KYC documents.

## 2. Understand the Tax You're Actually Liable For

Digital services have wildly inconsistent tax rules by jurisdiction. The three you'll hit first:

- **EU VAT (OSS):** If you sell digital services to EU consumers, you charge VAT at the buyer's country rate. The EU's One-Stop Shop (OSS) lets you register once and file a single quarterly return. Threshold for non-EU sellers is effectively zero — the first sale counts. A MoR handles this entirely; if you go direct with Stripe, use Stripe Tax and register for OSS.
- **UK VAT:** Similar regime, separate registration. Post-Brexit, the UK is not covered by EU OSS.
- **US sales tax:** Economic nexus thresholds vary by state (commonly $100k or 200 transactions). SaaS taxability differs state to state. If you use a MoR, this is their problem.

Keep a simple ledger: date, customer country, gross amount, tax collected, tax remitted. Your accountant will thank you, and audits get trivial.

## 3. Know Your Customer (KYC) and Anti-Money Laundering (AML)

Every processor will ask you to prove you're a real business. Prepare this once and reuse it:

- Government ID and proof of address for the owner.
- Business registration documents (LLC articles, incorporation certificate).
- A business bank account in the same legal name as the entity.
- A clear, public description of what you sell and to whom.

Red flags that freeze accounts: vague product descriptions, high chargeback ratios (>1%), sudden volume spikes, and customers in sanctioned jurisdictions. If you sell to users in Iran, Syria, North Korea, Cuba, or Crimea — even accidentally — payment networks will block the transaction and may terminate you. Screen signups by country at the edge; don't rely on the processor to catch it after the fact.

## 4. Getting Paid: Payouts and FX

Processors pay out in their settlement currency (usually USD or EUR). Converting to your local currency costs 0.5–2% depending on the provider. Practical tips:

- **Use a multi-currency account** (Wise Business, Revolut Business, or your processor's native payouts) to avoid double conversion.
- **Batch payouts weekly or monthly**, not daily — fixed fees per transfer add up fast.
- **Watch FX spread, not just the headline fee.** A "free" transfer with a 1.5% spread is worse than a 0.4% explicit fee.
- **Invoice in your home currency when possible** to shift FX risk to the buyer, but expect pushback from enterprise customers who insist on local currency.

## 5. Keep Records That Survive an Audit

You don't need accounting software with forty integrations. You need:

1. **Immutable transaction logs** — export processor reports monthly to cold storage.
2. **A tax-residency document** — know where you're a tax resident and file accordingly. If you're a digital nomad, this gets complicated fast; get local advice.
3. **A simple policy page** — refund policy, terms of service, and privacy policy. Processors check these during onboarding and disputes.

## Next Steps

1. **Decide your MoR vs. direct processor** based on whether you want to own global tax compliance. For most solo devs, a MoR wins.
2. **Register your entity and open a business bank account** before applying to any processor — the KYC step stalls without both.
3. **Set up country-based signup screening** to avoid sanctioned-jurisdiction sales.
4. **Build a monthly export job** that pulls transaction and tax data into a dated archive.
5. **Talk to an accountant once** in your tax-residency country about digital-services income. One hour now saves a painful filing later.