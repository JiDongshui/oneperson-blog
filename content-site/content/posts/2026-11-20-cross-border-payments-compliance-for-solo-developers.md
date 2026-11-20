---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-20T11:28:56.218Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You built something people want. Then someone in Germany tries to pay you and you realize your Stripe account is set up for one country, your payout currency isn't what you expected, and you have no idea whether you owe VAT to the EU. This is the unglamorous part of going global, but it's solvable with a small set of decisions made early.

Here's what actually matters when you're a one-person company selling software, services, or digital products across borders.

## Pick a Payment Processor That Matches Your Legal Entity

Your processor choice is constrained by where your business is legally registered, not where your customers are. A few practical rules:

- **Stripe** supports a long list of countries, but the country of your Stripe account must match your registered business address. You cannot "just use" a US Stripe account if your entity is in India or Brazil.
- **Paddle and Lemon Squeezy** act as Merchant of Record (MoR). They sell to your customer, handle sales tax/VAT collection and remittance, and pay you a net amount. This is the single biggest compliance shortcut available to solo developers.
- **PayPal** is useful as a fallback for customers whose cards fail, but fees and currency conversion add up.

If you're a solo dev with no appetite for tax registration in 30 countries, an MoR is usually worth the ~5% cut. If your margins are thin or you sell high-ticket B2B, direct processing plus a tax tool (Stripe Tax, Quaderno) may be cheaper.

## Understand the Tax Trigger Points

Two separate taxes bite cross-border sellers: **VAT/GST** and **US sales tax**. They behave differently.

**VAT/GST (EU, UK, Australia, etc.):** For digital goods sold to consumers (B2C), most jurisdictions require you to register once you cross a low threshold — often **zero** for non-established sellers. The EU's OSS (One-Stop Shop) lets you register once and file a single return covering all member states. The UK has its own registration. Australia and others have their own.

**US sales tax:** Post-*Wayfair*, states can require collection based on **economic nexus** — typically $100k in sales or 200 transactions per state. For most solo devs this is a non-issue until you scale, but track it.

**B2B is different:** If you sell to a business in the EU and they provide a valid VAT number, the reverse-charge mechanism applies — you charge 0% VAT and the buyer self-accounts. Always collect and validate VAT IDs (the VIES service is free).

## Handle Currency and Payouts Deliberately

Currency handling is where solo devs quietly lose money.

- **Price in your customer's currency** where possible. Local pricing converts better, but it exposes you to FX risk between charge and payout.
- **Know your settlement currency.** Stripe settles in your account's default currency; if a customer pays in EUR and you settle in USD, you eat a conversion spread.
- **Watch the payout fee stack:** processing fee + currency conversion + cross-border payout fee. On a $20 charge this can be 8–10%.
- **Consider a multi-currency account** (Wise, Payoneer) if you receive payouts in several currencies and want to avoid repeated conversions.

For B2B invoices, always state the currency, the amount, your VAT/tax ID, and payment terms in writing. Ambiguity here causes disputes.

## Keep Records That Survive an Audit

You don't need an accountant on retainer, but you need records a tax authority would accept. Minimum viable bookkeeping:

1. **Every invoice** with sequential numbering, date, line items, tax amount, and both parties' tax IDs.
2. **Proof of tax treatment** — saved VAT ID validations, reverse-charge notes, and MoR receipts showing tax was collected.
3. **Bank/processor statements** reconciled monthly to your invoices.
4. **A single ledger** (Wave, Xero, or even a spreadsheet) that maps each payout to its underlying sales.

Store these for the statutory period in your jurisdiction (often 6–10 years). Cloud storage with versioning is fine.

## Automate the Boring Parts

Manual compliance breaks the moment you get busy shipping. Automate:

- **Tax calculation** at checkout (Stripe Tax or your MoR).
- **VAT ID validation** on B2B checkout, with the result stored on the invoice.
- **Invoice generation** tied to payment events via webhook.
- **Monthly reconciliation** — a script or Zapier flow that pulls processor payouts and logs them to your ledger.

The goal is that a new country's customer can pay you without you touching anything, and that at year-end you can export clean numbers in an hour.

## Next Steps

1. **Decide your model:** MoR (Paddle/Lemon Squeezy) vs. direct (Stripe + Stripe Tax). Write down the tradeoff for your margins.
2. **Confirm your entity and processor country match** — check Stripe's supported-countries list against your registration.
3. **Map your tax obligations:** list the countries you actually sell to and whether each requires registration now or only past a threshold.
4. **Set up VAT ID validation** on B2B checkout and store the result with each invoice.
5. **Build one reconciliation flow** this week — even a spreadsheet template — so records don't pile up.
6. **Review fees on a real $20 and a real $200 charge** in a foreign currency, and adjust pricing or processor choice if the stack is eating your margin.

Cross-border compliance isn't exciting, but it's finite. Make these five decisions once, automate them, and get back to building.