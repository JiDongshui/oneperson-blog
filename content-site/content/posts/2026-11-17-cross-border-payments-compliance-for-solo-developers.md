---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-17T11:45:39.485Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software internationally as a one-person company is easier than ever—until money has to cross a border. Then you hit a maze of payment processors, tax rules, and KYC requirements that were designed for companies with finance departments. This guide cuts through the noise with practical choices you can act on this week.

## Pick a Merchant of Record If You Want to Skip the Hard Parts

The single biggest decision is whether you become the "merchant of record" (MoR) or let someone else do it.

- **Merchant of record (you):** You are the legal seller. You collect sales tax/VAT, handle refunds, and own compliance in every jurisdiction. Stripe, Paddle, or Lemon Squeezy can process payments, but the tax liability is yours.
- **Reseller model (them):** Platforms like Paddle, Lemon Squeezy, and FastSpring act as the merchant of record. They handle sales tax, VAT, and remittance in the buyer's country. You get a single payout and a cleaner tax story.

For a solo developer, the reseller model is usually worth the 5–10% fee. You trade margin for not having to register for VAT in the EU, file US sales tax in 40 states, or explain digital-services tax rules to an accountant. If your revenue is small, the fee is trivial compared to the cost of getting compliance wrong.

If you do go direct with Stripe, use **Stripe Tax** and enable it before your first international sale. Retrofitting tax logic after you've sold to 30 countries is painful.

## Understand the Three Compliance Layers

Cross-border selling has three distinct obligations. Keep them separate in your head:

1. **Tax registration and remittance.** VAT (EU/UK), GST (Australia, Canada, India), and US state sales tax. Thresholds vary wildly—the EU's €10,000 OSS threshold, the UK's £90,000, and US economic nexus rules that differ by state.
2. **KYC/AML for your business.** Payment processors must verify who you are. Expect to upload incorporation documents, proof of address, and sometimes a government ID. Sole proprietors often face more friction than a registered LLC or Ltd.
3. **Consumer protection and data rules.** Refund rights, GDPR/CCPA data handling, and invoicing requirements (many EU buyers need a VAT-compliant invoice with your VAT number).

The practical takeaway: get an accountant who has handled digital SaaS internationally, even if only for a one-hour consultation. It costs less than a single penalty.

## Choose Your Payout Rail Deliberately

Getting paid is not the same as getting money into your bank account. Payout rails have real costs and delays:

- **Stripe/PayPal:** Fast, but currency conversion spreads can quietly cost 2–4%.
- **Wise Business:** Good for multi-currency accounts and mid-market FX rates. Useful if you invoice clients directly.
- **Payoneer:** Popular for marketplaces and platforms that pay out to creators.
- **Local bank account:** Sometimes the cheapest for large invoices, but you carry the FX risk.

For recurring SaaS, let the platform pay out monthly and keep a multi-currency buffer. Don't convert every small payment—batch conversions to reduce fees. Also watch for **withholding tax** on B2B invoices: some countries (notably in Asia and Latin America) withhold 10–20% at source. A tax treaty may reduce this, but you often need to file a certificate of residence to claim it.

## Keep Records That Survive an Audit

Solo developers get audited less often, but when it happens, disorganized records are expensive. Maintain:

- A ledger mapping every payout to invoices, with currency and FX rate at the time of sale.
- Copies of tax registrations and threshold calculations.
- Your terms of service, refund policy, and privacy policy, versioned by date.
- A simple document showing where each customer is located (IP + billing address) to justify tax treatment.

A spreadsheet plus a cloud folder is enough at small scale. Automate invoice archiving via your payment platform's API or webhook exports so you never reconstruct history by hand.

## Next Steps

1. **Decide on merchant of record vs. direct.** If you're under ~$100k ARR and selling globally, default to a reseller platform like Paddle or Lemon Squeezy.
2. **Enable tax automation today.** Turn on Stripe Tax or confirm your MoR handles VAT/GST for your top five buyer countries.
3. **Book a one-hour consult** with an accountant experienced in cross-border SaaS. Bring your revenue by country.
4. **Set up a multi-currency payout account** (Wise or your processor's native payouts) and batch FX conversions monthly.
5. **Document your compliance stack** in a single README: processor, MoR status, tax registrations, and where invoices live.

Compliance is boring until it isn't. Spend a day now, and you'll spend zero days later explaining yourself to a tax authority.