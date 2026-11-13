---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-13T10:53:33.120Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You shipped a product. The first paying customer arrives — from another country. Suddenly you're not just a developer; you're running an international payment operation with tax and compliance obligations you never signed up for. This guide covers the practical stack and the traps that catch solo developers.

## Pick a Merchant of Record Unless You Enjoy Paperwork

The single biggest decision is whether to be a **merchant of record (MoR)** or use one.

As a merchant of record, *you* are the seller of record. You handle sales tax/VAT/GST registration, remittance, refunds, and chargebacks across every jurisdiction you sell into. For a solo dev, this is a part-time compliance job.

An MoR takes a cut of each transaction but becomes the seller of record on your behalf. They calculate, collect, and remit sales tax globally, handle fraud and chargebacks, and give you a single payout. The tradeoff is fees (often 4–5%+ plus a per-transaction cut) versus the hours you'd spend on tax registration.

For most solo developers, an MoR is worth it below roughly $10–20k/month in revenue. Above that, the fee percentage starts to hurt and DIY economics improve — but only if you're disciplined.

## The Compliance Triggers You Can't Ignore

Even with an MoR, some obligations stay with you:

- **Income tax** where you're tax-resident. Your MoR pays *sales* tax; you still report *income*.
- **VAT/GST registration thresholds** if you sell directly. The EU's OSS scheme lets you register once and file for all member states, but the €10,000 cross-border threshold means you can't ignore it forever.
- **US sales tax nexus** — economic nexus thresholds (commonly $100k in sales or 200 transactions per state) vary by state. Marketplaces often handle this; your own checkout doesn't.
- **Sanctions and export controls.** You cannot sell to sanctioned countries or entities. Payment processors screen for this, but you're ultimately responsible.
- **KYC/AML.** Your processor will ask who you are and where your money comes from. Answer honestly and keep documentation.

## Structuring Payouts and Currency

You'll get paid in multiple currencies. Decide how to receive them:

- **Multi-currency accounts** (Wise, Payoneer, Mercury for US entities) let you hold balances and convert at better rates than bank FX spreads.
- **Local receiving accounts** (USD, EUR, GBP IBANs) reduce correspondent-bank fees and speed up settlement.
- **Avoid stacking conversions.** Each conversion is a spread. Convert once, deliberately.

If you operate as a sole proprietor in one country, you generally can't open accounts in another without a local entity. A US LLC (via services like Stripe Atlas or doola) is a common route for non-US developers, but it creates US filing obligations (Form 5472, annual reports) — factor in the ongoing cost before incorporating.

## Practical Stack for a One-Person Shop

A workable default:

1. **Payments/MoR:** Paddle, Lemon Squeezy, or Stripe (Stripe Tax if you go direct). Pick based on your product type and supported countries.
2. **Payouts/FX:** Wise Business or Payoneer for receiving and converting.
3. **Invoicing:** Your MoR or processor generates receipts; use a simple tool for B2B invoices that need your tax ID.
4. **Bookkeeping:** A tool that imports multi-currency transactions and handles FX gain/loss (Xero, Wave, or a spreadsheet if small).
5. **Records:** Store contracts, KYC documents, and tax filings for the required retention period (often 5–10 years).

## Common Traps

- **Ignoring FX gains/losses.** Currency movements between invoice and settlement create taxable gains or losses. Track them.
- **Assuming the MoR handles everything.** They handle sales tax on their transactions, not your income tax, corporate filings, or sanctions screening of your own marketing.
- **Refund and chargeback policy gaps.** Cross-border buyers dispute more. Clear policies and fast support reduce losses.
- **Underestimating fees.** Stack processor + MoR + FX + payout fees; a 3% margin product can lose money on small transactions.
- **Mixing personal and business funds.** This complicates bookkeeping and can pierce liability protection.

## Next Steps

1. **Estimate your fee stack** for a typical transaction: processor + MoR + FX + payout. If it exceeds ~8%, revisit your pricing or structure.
2. **Decide MoR vs. direct** based on projected monthly volume and how much compliance time you can realistically absorb.
3. **Open a multi-currency receiving account** and stop letting your bank do FX at retail spreads.
4. **Document your entity and tax situation** with a local accountant before your first cross-border payout — retroactive fixes are expensive.
5. **Set a quarterly review** of thresholds (VAT, nexus, revenue tiers) so registration requirements never surprise you.

Cross-border selling is very doable solo — as long as you treat compliance as part of the product, not an afterthought.