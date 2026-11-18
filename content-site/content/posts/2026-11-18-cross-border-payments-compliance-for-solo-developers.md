---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-18T11:33:52.953Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You shipped the product. Now a customer in Germany wants to pay you, a customer in Brazil wants a subscription, and your bank account is in one country. Getting paid across borders as a one-person company is mostly a plumbing problem — but the compliance edges are where solo developers get stuck. Here's a practical map.

## Pick a Payment Rail Before You Pick a Provider

The rail determines your fees, settlement time, and compliance surface area. Most solo devs only need two or three:

- **Cards (Stripe, Paddle, Lemon Squeezy):** Highest fees (~2.9% + $0.30, plus 1–2% for currency conversion), but universal coverage and instant settlement. Stripe works in ~45 countries; if yours isn't one, use a merchant of record (MoR) like Paddle or Lemon Squeezy.
- **Merchant of Record vs. Payment Processor:** This is the single most important decision. An MoR (Paddle, Lemon Squeezy, FastSpring) becomes the legal seller. They handle VAT/GST registration, sales tax remittance, and refunds. You get a single payout and a 1099/statement. A processor (Stripe) makes *you* the merchant — you own every tax obligation. For solo devs selling digital goods to consumers, an MoR is usually worth the extra ~5% because it removes the worst compliance work.
- **Local rails for B2B:** For invoices over ~$1,000, wire transfers (SWIFT) or local schemes (SEPA in the EU, ACH in the US, Pix in Brazil, UPI in India) are far cheaper than cards. Wise, Payoneer, and similar services give you local receiving accounts in multiple currencies, so a European client can pay you via SEPA at near-zero cost.

If you're a US or EU solo dev, Stripe + Wise covers 90% of cases. If you're outside those regions, start with an MoR and a multi-currency account.

## Know Your Tax Obligations (The Part Nobody Warns You About)

Cross-border tax has two layers, and they're often confused:

**Indirect tax (VAT/GST/sales tax):** This is charged on the sale and depends on *where the customer is*, not where you are. The EU's OSS scheme, the UK's VAT registration, Australia's GST on digital services, and US state sales tax all apply to digital products sold to consumers. The thresholds are low — the EU requires registration from your *first* B2C digital sale (though the OSS one-stop shop simplifies filing). This is exactly the burden an MoR absorbs for you.

**Direct tax (income tax):** You pay this where you're tax-resident. If you operate as a sole proprietor, that's usually straightforward. If you incorporate (e.g., a US LLC or Estonian OÜ), you need to understand permanent establishment rules — a US LLC owned by a non-resident can create US filing obligations (Form 5472, etc.) even with zero US-source income. Talk to an accountant who handles cross-border freelancers before incorporating; it costs less than fixing it later.

**Withholding tax:** B2B clients in some countries (notably the US, India, and Brazil) may withhold tax on payments to foreign contractors. Ask for a certificate of residence and check whether a tax treaty reduces the rate. Keep every withholding certificate — they're your proof for foreign tax credits.

## Currency and Payout Mechanics

Don't let FX eat your margin. Three rules:

1. **Price in your home currency where possible.** If you must price in USD or EUR, build a 2–3% buffer into the price rather than absorbing conversion twice.
2. **Batch payouts.** Stripe and Wise charge per-conversion or per-transfer; weekly or monthly payouts beat per-sale transfers.
3. **Hold a small float in major currencies.** Keeping a few hundred dollars/euros in a multi-currency account lets you pay foreign SaaS bills (which often bill in USD/EUR) without round-tripping.

## Sanctions, KYC, and the "Why Is My Account Frozen" Problem

Payment providers are legally required to run KYC/AML checks and screen against sanctions lists. As a solo dev, you'll hit this most often when:

- Your customer is in a sanctioned or high-risk jurisdiction (Russia, Iran, Syria, and increasingly parts of the crypto space). No amount of documentation will unblock these — know the list before you sell.
- Your business looks like a "high-risk" category (gambling, adult, crypto, certain financial services). Stripe and PayPal will decline or freeze; specialized processors exist but charge more.
- Your account receives sudden large or unusual volume. This triggers manual review. Keep invoices, contracts, and a clear description of what you sell ready to submit.

Useful habit: keep a one-page "business description" document (what you sell, to whom, how you're paid) that you can paste into any KYC form. It saves hours of back-and-forth.

## Next Steps

1. **Decide MoR vs. processor this week.** If you sell digital products to consumers across borders, price out Paddle or Lemon Squeezy against Stripe plus a VAT filing service.
2. **Open a multi-currency receiving account** (Wise or Payoneer) so B2B clients can pay via local rails.
3. **Map your tax nexus.** List the countries where you have customers and check each one's digital-services VAT/GST threshold. If you're on an MoR, confirm in writing that they handle it.
4. **Draft a one-page KYC/business description** and store it with your invoices and contracts.
5. **Book one hour with a cross-border accountant** before you incorporate or cross the first tax threshold. It's the cheapest insurance you'll buy.