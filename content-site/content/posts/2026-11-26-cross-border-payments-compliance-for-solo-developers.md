---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-26T12:22:06.245Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software internationally is easy. Getting paid internationally is where solo developers hit a wall. Between currency conversion, tax withholding, and compliance requirements that vary by country, the operational overhead can eat your margins—or worse, get your account frozen.

This guide covers the practical decisions you need to make to accept international payments without running afoul of tax authorities or payment processors.

## Choose Your Payment Stack Based on Revenue Model

Your payment provider choice depends on whether you're selling subscriptions, one-time licenses, or services.

**For subscriptions and SaaS:** Stripe and Paddle are the two realistic options. Stripe gives you control but makes *you* the merchant of record—meaning you're responsible for calculating, collecting, and remitting VAT/GST in every jurisdiction where you have customers. Paddle (and similar providers like Lemon Squeezy) act as merchant of record, handling tax compliance for a ~5% fee on top of processing costs.

For a solo developer, the merchant-of-record model is usually worth the fee. EU VAT alone requires registration once you exceed €10,000 in cross-border B2C sales, and the OSS (One Stop Shop) filing is quarterly paperwork you don't want.

**For one-time sales and licenses:** Gumroad and Lemon Squeezy handle tax similarly. If you're selling through app stores, Apple and Google already act as merchant of record—don't double-handle tax.

**For B2B invoices:** Stripe Invoicing or Wise Business work well. B2B transactions often reverse the tax liability to the buyer (reverse charge mechanism in the EU), which simplifies your obligations but requires correct invoice language.

## Understand Where You Owe Tax

The single biggest trap is assuming your home country's tax rules apply everywhere. They don't.

**VAT/GST thresholds:** Most jurisdictions require registration only after crossing a revenue threshold. The EU's €10,000 OSS threshold is the most commonly hit. The UK requires VAT registration immediately for digital services to consumers (no threshold). Australia's GST threshold is AUD 75,000. Track your sales by country monthly—retroactive registration is painful.

**US sales tax:** Post-*Wayfair*, economic nexus thresholds (typically $100k or 200 transactions per state) apply. If you sell software to US customers, use a service like TaxJar or let a merchant-of-record handle it.

**Withholding tax on B2B:** If you invoice a company in another country, they may withhold tax at source (e.g., 30% US withholding on payments to foreign contractors, reduced by treaty). You reclaim this via tax treaties—file W-8BEN or the local equivalent *before* invoicing, or you'll lose the reduced rate.

## Set Up the Right Legal and Banking Structure

How you receive money matters as much as how you collect it.

**Entity type:** Operating as a sole proprietor is fine at low volume, but an LLC or local equivalent limits liability and simplifies some banking. Note: a US LLC owned by a non-resident has its own filing requirements (Form 5472, pro-forma 1120) even with zero US tax owed.

**Banking:** Wise Business and Mercury (for US entities) offer multi-currency accounts with real exchange rates. Avoid letting Stripe auto-convert to your local currency—the spread is typically 1-2%. Receive in the customer's currency and convert in batches.

**Payment rails:** For B2B, offer local rails where possible. SEPA transfers in Europe and ACH in the US are far cheaper than international wires, and customers prefer them.

## Keep Compliance Boring and Automated

The goal is to make compliance a background process, not a quarterly panic.

- **Store tax IDs on invoices.** Collect VAT numbers from EU B2B customers and validate them via VIES. Without a valid number, you must charge VAT.
- **Automate threshold tracking.** A simple script querying your Stripe API monthly, grouped by customer country, prevents threshold surprises. Store the output.
- **Keep records for the statutory period.** Most jurisdictions require 5-10 years of transaction records. Export monthly and back them up outside your payment provider.
- **Use a merchant-of-record if compliance distracts you from building.** The 5% fee is cheaper than an accountant's hourly rate for VAT filings in three jurisdictions.

## Next Steps

1. **Audit your current sales by country.** Pull last 12 months from your payment provider and identify which tax thresholds you're approaching.
2. **Decide on merchant-of-record vs. direct.** If you're under thresholds and selling B2B, Stripe is fine. If you're scaling B2C into the EU/UK, switch to Paddle or Lemon Squeezy.
3. **Open a multi-currency account** with Wise or Mercury and stop accepting auto-converted payouts.
4. **Collect tax IDs at checkout** for B2B customers and validate EU numbers via VIES.
5. **Set a monthly calendar reminder** to export transaction records and check threshold progress—30 minutes now saves a tax audit later.

Compliance isn't glamorous, but a clean payment stack lets you focus on the part that actually pays: building software people want to buy.