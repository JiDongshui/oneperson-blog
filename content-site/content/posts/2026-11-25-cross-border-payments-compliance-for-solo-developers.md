---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-25T12:45:34.644Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You shipped a product. The first paying customer signs up—then you notice they're in Germany, and you're in Brazil. Suddenly you're dealing with currency conversion, VAT, sanctions screening, and a payment processor that wants a business license you don't have. Here's how to handle cross-border payments without hiring a compliance team.

## Pick a Merchant of Record (MoR) First

The single highest-leverage decision for a solo developer is choosing a Merchant of Record instead of a raw payment gateway. An MoR (Paddle, Lemon Squeezy, Gumroad, FastSpring) becomes the legal seller of record. They calculate, collect, and remit sales tax/VAT/GST on your behalf across jurisdictions, and they absorb most of the compliance burden.

Compare that to Stripe or PayPal, where *you* are the merchant. You're responsible for registering for VAT in the EU once you cross thresholds, filing US sales tax in economic-nexus states, and handling chargebacks. For a one-person company, the MoR's ~5% fee (versus ~3% for Stripe) is usually worth it purely as insurance against compliance mistakes.

Practical rule: if you sell digital products or SaaS to consumers globally, start with an MoR. If you sell B2B with invoices and negotiated contracts, a gateway like Stripe may fit better—but budget time for tax registration.

## Understand Where You Actually Owe Tax

Two concepts trip up solo devs: **place of supply** and **registration thresholds**.

For digital services to consumers (B2C), most jurisdictions tax based on the *customer's* location, not yours. The EU's OSS (One-Stop Shop) lets you file a single quarterly return for all EU member states once you exceed €10,000/year in cross-border EU sales. The UK has its own £90,000 threshold for non-established sellers (effectively zero—you register from the first sale). Many US states have economic nexus thresholds (commonly $100,000 in sales or 200 transactions).

If you use an MoR, they handle this. If you don't, keep a spreadsheet of sales by country and monitor thresholds monthly. Don't guess—each tax authority publishes its own rules, and penalties for non-registration accrue quietly.

## Handle Payouts and Currency Without Bleeding Fees

Getting paid is only half the problem; getting money into your bank account cheaply is the other.

- **Multi-currency accounts**: Wise Business, Payoneer, and Revolut Business give you local receiving accounts (IBAN, US routing number, etc.) so customers pay via local transfer instead of expensive SWIFT wires. This alone can cut 2–3% off each transaction.
- **FX conversion**: Never let a platform auto-convert at its default rate. Compare mid-market rates (Wise publishes theirs) and batch conversions to reduce fixed fees.
- **Payout timing**: MoRs typically pay out monthly with a reserve hold. Factor that into cash flow—don't promise yourself the money the day a customer pays.

For a solo dev, a common stack is: MoR for collection and tax → Wise or Payoneer for receiving → local bank for operating expenses. Keep the flow simple; every extra hop adds fees and reconciliation work.

## Sanctions, KYC, and the "Boring" Risks

Even with an MoR shielding you from tax, you remain responsible for who you do business with. Sanctions screening (OFAC, EU, UN lists) is typically handled by your payment provider, but if you sell directly—especially to businesses or in high-risk sectors—you should at least:

- Collect a billing country and validate it against the IP/card country.
- Refuse service to sanctioned jurisdictions (Crimea, Iran, North Korea, Syria, Cuba, and others depending on your jurisdiction).
- Keep records of transactions for the retention period your tax authority requires (often 5–10 years).

You don't need a compliance officer. You need a documented, consistent process: a short internal policy note, a country blocklist in your checkout, and archived invoices. If a bank or processor ever asks, showing you have a process is often enough to keep your account open.

Also watch **KYC on yourself**: opening a business bank account or a Wise/Payoneer account as a solo founder requires proof of business registration, address, and sometimes a description of your business model. Have those documents ready before you apply.

## Next Steps

1. **Decide MoR vs. gateway** based on whether you sell B2C digital goods (MoR) or B2B invoiced services (gateway).
2. **Open a multi-currency receiving account** (Wise, Payoneer, or Revolut Business) and compare FX costs before your first payout.
3. **Write a one-page payments policy**: which countries you serve, how you screen them, and where you store records.
4. **Set a monthly reminder** to review sales-by-country against tax registration thresholds—or confirm your MoR is covering them.
5. **Test a real international transaction** end-to-end (small amount, foreign card) to catch currency and payout surprises before they scale.

Cross-border complexity scales with volume, not headcount. Get the structure right early, and you can stay a one-person company far longer.