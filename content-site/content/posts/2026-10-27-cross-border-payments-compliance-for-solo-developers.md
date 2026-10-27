---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-10-27T08:55:07.589Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You've built a product people in another country want to buy. Now you need to actually collect money from them—and do it without accidentally triggering a compliance headache that eats your margin or gets your account frozen. This guide covers the practical path for one-person companies: which payment rails to pick, what compliance actually applies to you, and how to keep records clean.

## Start With the Right Rails

The biggest mistake solo developers make is reaching for a single global processor and assuming it handles everything. In reality, your options fall into three buckets:

**Merchant of Record (MoR).** Services like Paddle, Lemon Squeezy, and FastSpring act as the "seller" on record. They handle sales tax/VAT/GST calculation and remittance, and they deal with most tax registration for you. You get a payout minus their fee (typically 5% + a small fixed fee). For a solo dev selling digital products or SaaS to a global audience, this is usually the correct default. You trade margin for the removal of an enormous ongoing compliance burden.

**Payment Service Provider (PSP).** Stripe, Adyen, and similar let you accept cards directly. You're the merchant. Stripe Tax can calculate and collect tax, but *you* remain responsible for registering and remitting. This is cheaper per transaction but shifts compliance onto you.

**Local rails.** For specific markets, local methods matter. In parts of Europe, SEPA transfers and local wallets reduce card fees. In India, UPI and local card networks dominate. In Brazil, Pix is near-universal. If a market is a meaningful share of revenue, integrating a local method can lift conversion significantly—but each rail adds reconciliation work.

A pragmatic stack: MoR for your global long tail, plus a PSP account if you need flexibility or lower fees at scale. Don't over-engineer before you have volume.

## Know Which Taxes and Registrations Apply

This is where solo developers get burned. Two tax regimes dominate cross-border digital sales:

**EU VAT (and UK VAT).** Selling digital services to EU consumers triggers VAT based on the *customer's* location, not yours. The EU's One-Stop Shop (OSS) scheme lets non-EU and EU businesses register once and file a single quarterly return covering all member states. There's a €10,000/year threshold for cross-border B2C digital sales before you must charge destination VAT (rules vary by your home country—verify yours). The UK has its own registration threshold and non-resident scheme.

**US sales tax.** Economic nexus rules mean you can be required to collect in a state once you cross revenue or transaction thresholds there—often $100,000 in sales or 200 transactions, varying by state. Software-as-a-service taxability differs state to state; some tax it, some don't. This is genuinely complex for a solo operator.

**The MoR shortcut:** if the MoR is the seller of record, *they* handle VAT/sales tax registration and remittance. You invoice them, not the end customer. This is the single strongest argument for using an MoR as a solo dev.

If you go the PSP route, budget for a tax tool (Stripe Tax, TaxJar, Avalara) and be prepared to register in multiple jurisdictions. That's real ongoing work.

## Handle Payouts, FX, and Money Movement

Getting paid is one problem; getting the money into your bank account is another.

- **Currency:** Accept in major currencies (USD, EUR, GBP) to reduce friction. Let the processor convert to your payout currency, but check the FX spread—it's often 1–2% hidden in the rate.
- **Payout timing:** MoRs typically pay out monthly after a holding period (often 30 days) to cover refunds and chargebacks. Plan cash flow around this.
- **Banking:** Use a business account (or a multi-currency account like Wise Business) so incoming funds are cleanly separated from personal money. This matters for bookkeeping and for any future audit.
- **Chargebacks:** Digital goods attract disputes. Keep clear refund policies, deliver instantly, and respond to disputes with evidence. A high chargeback ratio can get you dropped by any processor.

## Keep Records That Survive Scrutiny

Even with an MoR, you have obligations: income reporting, expense tracking, and proving where money came from. Keep it boring and consistent:

- Reconcile every payout against the processor's transaction report monthly—not yearly.
- Store invoices and receipts for processor fees, since those are deductible business expenses.
- Track your revenue by country. It's useful for understanding your market and, if you ever switch to a PSP, for knowing where you have tax exposure.
- Keep a simple ledger (a spreadsheet is fine at low volume) mapping gross sales → fees → FX → net payout.

If you're a sole proprietor, confirm how foreign-sourced income is taxed in your jurisdiction. Most countries tax worldwide income for residents, but reporting mechanics differ.

## Next Steps

1. **Decide MoR vs. PSP** based on your expected volume and tolerance for tax admin. For most solo devs starting out, an MoR wins on time saved.
2. **Read your target market's thresholds** before you launch there—EU OSS and US state nexus rules are the two big ones.
3. **Open a dedicated business/multi-currency account** and route all payouts there.
4. **Build a monthly reconciliation habit** now, while volume is low. It's trivial at 20 transactions and painful at 2,000.
5. **Consult a local accountant once** to confirm your personal tax situation and whether your chosen setup creates registration obligations. A single hour of advice is cheaper than a cleanup later.

Cross-border selling is more accessible than ever for one-person companies. The winning move is choosing rails that absorb compliance rather than fighting it yourself—then keeping clean records so nothing surprises you at tax time.