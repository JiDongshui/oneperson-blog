---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-08T10:15:17.852Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You built a product. A customer in Germany wants to pay you. You live in Brazil. What could possibly go wrong?

Quite a lot, actually. Cross-border payments are where indie developers routinely lose money to FX spreads, get accounts frozen, or discover—after their first sale—that they owe VAT in a country they've never visited. This article covers the practical mechanics: how to get paid, how to stay compliant, and how to avoid the traps that eat a solo developer's margins.

## 1. Choose Your Payment Rail Before You Choose Your Processor

Most developers start with Stripe or Paddle and stop thinking there. But the rail underneath matters more than the dashboard.

**Merchant of Record (MoR) vs. payment processor** is the first fork. An MoR like Paddle, Lemon Squeezy, or FastSpring becomes the legal seller. They handle sales tax, VAT, and refunds on your behalf. In exchange, they take 5–10% plus fees. A processor like Stripe or PayPal leaves you as the seller—you keep more margin but inherit the tax and compliance burden.

For a solo developer selling digital goods globally, an MoR is usually the right default. The 5% you "lose" is often cheaper than the accountant you'd need to handle EU VAT MOSS, UK VAT registration, and US state nexus thresholds. If your margins are thin or your volume is high, revisit this—but start with an MoR.

**Watch the FX spread.** If you're in a country whose currency isn't USD or EUR, every payment crosses a currency boundary. A 2% FX markup on a $20 subscription is $0.40—fine. But if you're also paying 3% processor fees and 10% MoR commission, you're at 15% before you've paid for hosting. Compare payout currencies: some processors let you hold balances in USD and pay out in bulk, saving on per-transaction conversion.

## 2. Understand Where You Owe Tax

This is the part that gets people audited. The good news: if you use an MoR, they handle it. If you don't, here's the map.

**EU VAT (OSS/MOSS):** Selling digital services to EU consumers triggers VAT in the customer's country. The One-Stop Shop lets you file a single return for all EU sales. Registration is required once you cross the €10,000 threshold across the EU—and the threshold applies to *total* EU sales, not per country. Below that, you can charge your home country's rate if you're EU-based; non-EU sellers generally must register from the first sale.

**UK VAT:** Post-Brexit, the UK has its own regime. Digital services to UK consumers: register if sales exceed £90,000 (or immediately if you're non-UK and selling B2C digital services—the threshold doesn't apply the same way). Check current rules; they change.

**US sales tax:** The *South Dakota v. Wayfair* decision means states can require collection based on economic nexus—typically $100k in sales or 200 transactions per state. Most solo developers don't hit this, but if you do, services like TaxJar or Avalara automate it. Again: an MoR sidesteps this entirely.

**Your home country:** Don't forget local income tax and any registration requirements for exporting services. Many jurisdictions have favorable regimes for service exporters—worth a one-hour consultation with a local accountant.

## 3. Get Your Paperwork Right

Compliance isn't just tax. It's the documents that let money move.

- **Invoices:** Many jurisdictions require specific fields—your tax ID, the customer's tax ID for B2B, sequential numbering. An MoR generates these for you; if you're processing yourself, use a tool that handles localization.
- **Terms of service and refund policy:** Cross-border consumer law (EU especially) gives customers strong refund rights. Your ToS must comply with the customer's local consumer protection rules, not just yours.
- **KYC/AML:** Payment processors will ask for identity documents, business registration, and sometimes proof of address. Have these ready before you launch. A frozen account during launch week is a nightmare.
- **Data protection:** If you're handling EU customer data, GDPR applies regardless of where you are. Minimal collection and a clear privacy policy go a long way.

## 4. Build for Failure

Cross-border payments fail more often than domestic ones—declined cards, currency mismatches, sanctions screening false positives. Design for it:

- **Retry logic with dunning emails** for failed subscription renewals.
- **Multiple payment methods**—cards fail in different regions; local methods (SEPA, iDEAL, Pix) convert better.
- **Webhook idempotency** so a duplicate payment event doesn't double-credit an account.
- **A reconciliation job** that compares your database against processor payouts weekly. FX rounding errors and missed refunds hide in the gaps.

Keep a simple ledger: every sale, every fee, every payout, in one currency for accounting. Your future self (and your accountant) will thank you.

## Next Steps

1. **Decide MoR vs. processor** based on your volume and tolerance for tax admin. Default to MoR if unsure.
2. **Map your tax obligations** for your top three customer countries. If you're non-EU selling to the EU, assume VAT registration is required.
3. **Prepare KYC documents** before launch—business registration, ID, address proof.
4. **Add dunning and reconciliation** to your billing flow this week. It's an afternoon of work that prevents silent revenue leaks.
5. **Book one hour with a local accountant** who understands service exports. It's the highest-ROI hour you'll spend on compliance.

Cross-border complexity is front-loaded. Get the structure right once, and you can focus on the product—which is the part you actually wanted to build.