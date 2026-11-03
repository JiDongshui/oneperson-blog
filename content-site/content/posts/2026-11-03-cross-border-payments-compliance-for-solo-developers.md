---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-03T10:47:23.965Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
distributed: devto
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software globally as a one-person company is easier than ever — until money has to cross a border. Then you meet currency conversion, tax withholding, sanctions screening, and a pile of paperwork. This guide covers the practical setup that keeps you paid without drowning in compliance work.

## Pick Your Payment Rails First

Your payment stack determines most of your compliance burden, so choose deliberately.

**Merchant of Record (MoR)** — Paddle, Lemon Squeezy, Gumroad. The MoR is the legal seller: they handle sales tax/VAT registration, collect and remit taxes, and pay you a single net settlement. You trade roughly 5–10% of revenue for near-zero tax administration. For solo devs selling digital goods to consumers worldwide, this is usually the correct default.

**Payment processors** — Stripe, PayPal, Adyen. You are the seller and therefore responsible for tax registration, invoicing rules, and refund handling in each jurisdiction. Stripe Tax and similar tools automate calculation and filing, but the legal obligation stays with you. Worth it if you sell B2B, need custom checkout flows, or your margins can't absorb MoR fees.

**Crypto and stablecoins** — attractive for low fees, but tax treatment varies wildly by country, and you inherit anti-money-laundering (AML) obligations if you operate an exchange-like service. Treat this as an edge case, not a foundation.

A hybrid works well: MoR for consumer self-serve, Stripe for B2B invoices and annual contracts.

## Understand Where You Actually Owe Tax

Two separate questions trip people up:

1. **Income tax** — generally owed where you are tax-resident (or where your company is incorporated). Straightforward.
2. **Consumption tax (VAT/GST/sales tax)** — owed where the *customer* is located. This is the hard part.

Most jurisdictions have thresholds before registration is required. The EU's OSS scheme lets you file one return for all member states once you cross €10,000 in cross-border B2C sales. The UK requires registration immediately for digital services to consumers once you exceed £90,000 (or on first sale in some interpretations — check current rules). Many US states have economic nexus thresholds ($100k or 200 transactions is common, though rules differ).

Practical rules of thumb:

- **Digital services to consumers**: assume consumption tax applies at the customer's location. Use an MoR or a tax engine.
- **B2B with a valid VAT ID**: reverse-charge usually applies — you invoice without tax, but you must validate the ID (VIES for the EU) and keep proof.
- **Keep every invoice and validation record** for the statutory retention period (often 7–10 years).

## Sanctions, KYC, and the Boring Stuff That Bites

Even a solo developer is expected to avoid doing business with sanctioned parties. You don't need a compliance department, but you do need basic hygiene:

- **Screen customers** against OFAC, EU, and UN lists if you sell high-value or B2B services. Free tools and APIs exist; a quarterly batch check on your customer list is a reasonable minimum.
- **Know your payer.** For large or unusual payments, collect company name, country, and a contact. If a payment arrives from a jurisdiction you don't serve, refund it rather than guess.
- **Watch for red flags**: mismatched payer and customer names, requests to split payments, pressure to accept unusual methods, chargebacks shortly after delivery.
- **Keep records** of what you screened and when. Regulators care about process, not perfection.

If you use an MoR or a major processor, much of this is handled for you — another reason they're attractive at small scale.

## Manage FX and Cash Flow Like a Business

Cross-border money loses value in three places: conversion spreads, payout fees, and settlement delays.

- **Price in one currency** (usually USD or EUR) unless your market demands local pricing. Local pricing lifts conversion but adds FX exposure and tax complexity.
- **Use a multi-currency account** (Wise, Revolut Business, Mercury) to receive and hold funds, then convert in batches when rates are favorable. Avoid converting every small payout.
- **Model the true cost**: a 2.9% processor fee plus 1% FX spread plus a $10 payout fee can eat 5%+ of a small transaction. Set a minimum transaction size or absorb it in pricing.
- **Keep a buffer** for chargebacks and refunds. Cross-border disputes take longer and are harder to win.

## Next Steps

1. **Decide your seller model** — MoR vs. processor — based on customer type and volume. Write down the tax obligations each creates.
2. **List the jurisdictions** you sell into and check registration thresholds for each. Set calendar reminders before you cross them.
3. **Open a multi-currency business account** and route payouts through it.
4. **Set up a compliance folder**: invoices, VAT ID validations, screening logs, and refund records, organized by year.
5. **Add a quarterly review** — check thresholds, re-screen customers, and reconcile FX costs against your pricing.

None of this is glamorous, but an afternoon of setup now saves weeks of cleanup later — and lets you focus on shipping.