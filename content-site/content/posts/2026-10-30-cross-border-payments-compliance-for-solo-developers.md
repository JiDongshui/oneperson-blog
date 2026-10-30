---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-10-30T09:57:12.500Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
distributed: devto
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software or services internationally is one of the fastest ways to grow revenue as a solo developer, but getting paid across borders is where many independent builders hit a wall. Between payment processor restrictions, tax registration thresholds, and currency conversion, the compliance layer can feel overwhelming. The good news: with the right stack, you can stay compliant without hiring a lawyer or accountant for every decision. This guide covers the practical essentials.

## Choose Your Payment Stack Around Your Entity, Not the Other Way Around

Most compliance headaches start with mismatched assumptions. Before you open a Stripe account, understand what your legal entity (sole proprietor, LLC, or local equivalent) can and cannot do.

- **Payment processors care about where your entity is registered**, not where you live. A US LLC can access Stripe, PayPal, and Mercury even if you reside elsewhere — but you'll need an EIN, a US address (registered agent), and often a bank account that accepts transfers to that entity.
- **Stripe Connect vs. Stripe standard accounts**: For selling your own software, a standard account is enough. Connect is for platforms paying out to third parties.
- **Merchant of Record (MoR) providers** like Paddle or Lemon Squeezy absorb sales tax and VAT liability for a fee (typically 5% + payment fees). If you're a solo developer selling digital products globally, this is often the single highest-leverage compliance decision you can make.

If you choose a standard processor instead, you own the tax registration and remittance burden yourself — see the next section.

## Understand Where You Actually Owe Tax

Cross-border tax has three layers, and conflating them causes expensive mistakes.

1. **Income tax** — owed where you're tax resident (or where your entity is registered). This is your home country's problem and usually the simplest.
2. **Sales tax / VAT / GST** — owed where your *customers* are. This is the hard part.
3. **Withholding tax** — some countries (notably for B2B services) withhold a percentage at source. You may be able to reclaim it via a tax treaty, but you usually need a certificate of residence from your home tax authority.

Key thresholds to know for digital products:

- **EU VAT**: Since 2015, digital services are taxed where the customer is located. The One-Stop-Shop (OSS) scheme lets you register once and file a single return for all EU sales. Non-EU sellers can register for the non-Union OSS via a member state (Ireland and Estonia are popular). There's no minimum threshold for non-EU sellers.
- **UK VAT**: Registration is required once you exceed £90,000 in UK sales (as of recent thresholds — verify current figures). Below that, no registration needed for non-UK sellers.
- **US sales tax**: Economic nexus rules vary by state, typically triggered at $100k in sales or 200 transactions. Software-as-a-service taxability varies wildly by state — some tax it, some don't.
- **Australia GST**: A$75,000 threshold for non-resident sellers of digital services.

If this list makes your head spin, that's the argument for an MoR. If you want to own it, budget a few hours per quarter and use tools like Quaderno or Fonoa to automate calculation and filing.

## Handle Currency and Payouts Deliberately

Currency handling is where solo developers quietly lose 2–5% of revenue.

- **Price in one currency** (usually USD or EUR) to keep accounting simple, but display local currency where it improves conversion. Stripe's Adaptive Pricing and Paddle both handle this automatically.
- **Watch FX spreads on payouts.** Stripe pays out in your bank's currency and applies a conversion fee (~1–2%). Wise or a multi-currency account can reduce this if you're moving meaningful volume.
- **Keep a separate business bank account** in the same currency as your entity. Commingling personal and business funds is the fastest way to fail an audit or a processor review.

## Keep a Minimal Compliance Paper Trail

You don't need a corporate lawyer on retainer, but you do need defensible records. At minimum:

- **Invoices** with your entity name, address, tax ID, and the customer's details (required for B2B EU VAT reverse-charge).
- **VAT/tax ID validation** for B2B customers — use VIES for EU numbers and store the validation result.
- **Terms of service and privacy policy** that name your legal entity and governing jurisdiction.
- **Annual filings**: even a dormant US LLC needs a state annual report and a federal tax return (Form 5472 + 1120 for foreign-owned single-member LLCs — a common and expensive trap).

Automate what you can: Stripe Tax or Paddle handle calculation; a simple spreadsheet or bookkeeping tool (Wave, Xero) handles the rest. Review quarterly.

## Next Steps

1. **Decide your entity + MoR vs. standard processor** before your first sale. This decision is expensive to reverse.
2. **Map your customer base** to tax jurisdictions and note which thresholds you're approaching.
3. **Open a dedicated business bank account** in your entity's currency.
4. **Set up tax ID validation** for B2B invoices if you sell to EU businesses.
5. **Schedule a quarterly compliance review** — 30 minutes to check thresholds, file returns, and reconcile payouts.

Start with the MoR route if you're pre-revenue or under ~$50k/year; graduate to direct processing once the 5% fee starts to hurt more than the compliance work costs you.