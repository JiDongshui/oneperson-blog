---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-22T11:14:18.936Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
distributed: devto
---

# Cross-Border Payments for Solo Developers: A Practical Compliance Guide

You built a SaaS, a paid API, or a digital product. Customers are signing up from countries you've never visited. Then the first payout request arrives, and you realize that accepting money across borders is a compliance problem disguised as a payment feature.

This guide covers the decisions a solo developer actually has to make: which payment rails to use, how tax and KYC obligations land on you, and where the hidden traps are. It assumes you are one person, not a finance team.

## Choose the Right Rail Before You Write Code

Most cross-border friction comes from picking a processor that doesn't match your business model.

- **Merchant of Record (MoR) platforms** (Paddle, Lemon Squeezy, FastSpring) act as the legal seller. They handle sales tax, VAT, and much of the compliance burden. You get a single payout and a clean invoice trail. The tradeoff is a 5–8% fee and less control over checkout.
- **Payment processors** (Stripe, PayPal, Adyen) let you keep the customer relationship and lower fees (~2.9% + fixed), but *you* become the seller of record. Tax registration, refunds, and chargeback disputes are yours.
- **Local rails** (SEPA, iDEAL, Pix, UPI, Alipay) reduce decline rates in specific markets but multiply integration and reconciliation work.

For a solo dev, the honest default is: start with an MoR unless your margins are thin or you need deep checkout control. The compliance you avoid is worth more than the fee you save. If you go the processor route, use Stripe Tax or a similar tax engine from day one—retrofitting tax logic after you have customers in 40 countries is painful.

## Understand Where Tax Obligations Attach

Two different taxes matter, and they attach differently.

**VAT/GST on digital services** is generally owed where the *customer* is located, not where you are. The EU's OSS scheme, the UK, Australia, Canada, and many others require registration once you cross a revenue or transaction threshold—often as low as zero for B2C digital goods. You need to collect the customer's country and, in the EU, validate it with two non-conflicting pieces of evidence (IP address, billing country, bank country).

**Income tax** is owed where *you* are tax-resident. A US LLC owned by a non-resident can create US filing obligations (Form 5472, possibly 1040-NR) even with no US customers. Don't assume "foreign company = no US filing."

Practical steps:

1. Store the customer's billing country, IP country, and currency on every transaction.
2. Enable a tax engine that calculates rates by jurisdiction and product type.
3. Keep invoices immutable and numbered sequentially—auditors care about this.
4. Register for VAT/GST only when you cross thresholds, but track cumulative sales by country so you know when that happens.

## KYC, AML, and the "Where Is Your Money" Problem

Payment providers are legally required to know their customers—including you. Expect to submit:

- Government ID and proof of address
- Business registration documents (or a sole-trader declaration)
- A description of your business and expected transaction volume
- Source-of-funds explanations for large or unusual payouts

This is not optional friction you can route around. Accounts get frozen when KYC data goes stale or when transaction patterns look inconsistent with what you declared. Keep your provider's business profile updated when you change pricing, add products, or enter new markets.

For payouts, consider a multi-currency business account (Wise, Payoneer, Mercury) rather than converting everything to one currency at retail FX rates. Watch for:

- **FX spread** hidden in the exchange rate (often 1–3%)
- **Payout fees** per transfer, which hurt if you withdraw weekly
- **Holding risk** if your provider is in a jurisdiction with capital controls

## Sanctions Screening and Restricted Customers

Even as a one-person company, you are expected to avoid transacting with sanctioned individuals, entities, and countries. Your processor screens transactions, but it is not your compliance department—if you knowingly serve a blocked party, you can lose the account and face liability.

Minimum viable approach:

- Use a sanctions-screening API (OFAC, EU, UN lists) at signup, or rely on your processor's screening and document that you do.
- Block signups from comprehensively sanctioned regions (Crimea, Iran, North Korea, Syria, Cuba) unless you have a license.
- Keep a simple log of screening results and account decisions. If a regulator or processor asks, a timestamped CSV beats a vague memory.

## Next Steps

1. **Pick your model this week.** Decide MoR vs. processor vs. hybrid, and write down why. This determines everything else.
2. **Instrument your checkout.** Capture billing country, IP country, currency, and tax amount on every transaction.
3. **Turn on a tax engine.** Even if you're under thresholds today, start calculating and recording—retroactive registration is expensive.
4. **Complete KYC properly.** Submit clean documents and keep your provider's business profile current.
5. **Set up a screening log.** A spreadsheet with dates, names, and outcomes is enough to start.
6. **Review quarterly.** Thresholds change, providers change terms, and your transaction mix will drift. A 30-minute quarterly review prevents most surprises.

Cross-border payments reward boring, documented decisions. Build the paper trail early, and the compliance side stays in the background where it belongs.