---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-23T12:25:02.284Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software or services internationally as a solo developer is easier than ever technically. The hard part is getting paid and staying compliant without a finance team. This guide covers the practical setup: which payment providers to use, how to handle tax and KYC requirements, and how to avoid the common traps that freeze payouts.

## Choose the Right Payment Stack

No single provider handles every country well, so most solo developers run a two-layer stack: a merchant of record (MoR) for global tax handling and a payment processor for direct sales.

**Merchant of record (Paddle, Lemon Squeezy, FastSpring):** The MoR becomes the legal seller of record. It calculates, collects, and remits VAT/GST/sales tax in dozens of jurisdictions, handles refunds, and issues compliant invoices. You receive a single payout. The trade-off is fees (typically 5% + payment costs) and less control over checkout UX. For a solo developer with no tax team, this is usually the correct default.

**Payment processor (Stripe, PayPal, Wise Business):** You become the seller and take on tax registration obligations yourself. Stripe Tax can calculate and collect tax, but *registration* in each jurisdiction is your responsibility. Use this when you want lower fees at volume or need full checkout control.

A pragmatic pattern: start with an MoR to validate the market, then migrate high-volume regions to direct Stripe once the tax burden is worth managing.

## Understand Where You Create Tax Obligations

The two taxes that bite solo developers are VAT (EU/UK) and sales tax (US states). The rules differ fundamentally.

**EU/UK VAT:** Digital services sold to consumers (B2C) are taxed at the customer's location. If you sell more than €10,000/year cross-border within the EU, you must register for VAT — but the One-Stop-Shop (OSS) lets you file a single return for all EU countries instead of registering in each. The UK has a separate £90,000 threshold for non-established sellers (note: for non-UK businesses selling digital services to UK consumers, registration is required from the first sale). If you use an MoR, it handles this entirely.

**US sales tax:** Post-*Wayfair*, states can require registration once you cross an economic nexus threshold (commonly $100,000 in sales or 200 transactions per state). SaaS taxability varies by state — some tax it, some don't. This is genuinely complex; an MoR or a service like Stripe Tax plus a tax advisor is the sane path.

**B2B vs B2C:** B2B sales to EU businesses with a valid VAT number are typically reverse-charged (zero-rated for you). Collect and validate VAT IDs at checkout — Stripe and Paddle both support VIES validation.

## Get KYC and Payout Details Right the First Time

Most payout freezes happen at onboarding, not at tax time. Payment providers are legally required to verify your identity and business under KYC/AML rules.

- **Register a legal entity** (LLC, Ltd, or equivalent) before applying. Sole-proprietor accounts hit higher friction and lower limits.
- **Match names exactly** across your bank account, tax ID, and provider profile. Mismatches trigger manual review that can take weeks.
- **Have documents ready:** government ID, proof of address (utility bill under 3 months old), articles of incorporation, and a business bank statement.
- **Use a business bank account**, not a personal one. Wise Business and Mercury are common choices for solo operators; both support multi-currency receiving.
- **Check sanctions and restricted-country lists** before targeting a market. Some providers won't pay out to certain jurisdictions at all.

Keep a single folder with current versions of every document. When a provider asks for re-verification (they will, annually or on volume changes), you respond in minutes instead of days.

## Manage Currency, Fees, and Payout Timing

Cross-border money movement has three hidden costs: FX spread, fixed per-transaction fees, and payout delay.

- **Price in major currencies** (USD, EUR, GBP) and let customers pay locally. Forcing USD on EU buyers increases cart abandonment.
- **Watch the FX spread**, not just the headline fee. A "1% conversion fee" plus a 1.5% spread is really ~2.5%. Wise and Revolut Business typically beat bank rates.
- **Batch payouts** to reduce fixed fees if your provider charges per transfer.
- **Model payout timing** into cash flow. MoRs often pay monthly with a delay (net 15–30 after month-end); Stripe pays faster but holds new accounts longer. Don't plan payroll or infrastructure bills against money that hasn't landed.

## Keep Clean Records for Tax Filing

Even with an MoR, you owe income tax where you're resident, and you may need to file VAT returns if you sell directly. Export monthly reports from every provider, reconcile payouts against invoices, and store them for the required retention period (often 5–10 years). A simple spreadsheet plus cloud storage beats scrambling at year-end. If you sell direct, budget for an accountant familiar with cross-border digital services — it's cheaper than fixing a filing mistake.

## Next Steps

1. **Pick your model:** Decide between MoR-first (Paddle/Lemon Squeezy) or direct Stripe based on volume and control needs.
2. **Register your entity and business bank account** before applying to any processor.
3. **Assemble a KYC document folder** with current ID, address proof, and incorporation papers.
4. **Map your tax exposure:** list target countries, check VAT/nexus thresholds, and confirm whether your product is taxable there.
5. **Set up a reconciliation routine:** a monthly export-and-reconcile habit from day one.
6. **Consult a cross-border accountant** once you cross the first registration threshold — before you owe back taxes.