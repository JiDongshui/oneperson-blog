---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-24T13:36:11.629Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You built a product. Someone in Germany wants to pay you. You live in Brazil. What could go wrong? Quite a lot — but none of it is unsolvable. This guide covers the practical payment rails, the compliance traps that catch solo developers, and how to set things up so you can focus on shipping instead of fighting chargebacks and tax authorities.

## Pick a Payment Processor That Handles the Hard Part

For a one-person company, the merchant of record (MoR) model is usually the right call. An MoR like Paddle, Lemon Squeezy, or Polar sells your product on your behalf, collects the payment, handles sales tax/VAT registration and remittance in the buyer's jurisdiction, and pays you a single net transfer. You trade roughly 5% of revenue for enormous administrative relief.

The alternative — a payment gateway like Stripe — gives you lower fees (~2.9% + fixed) but makes *you* responsible for tax registration in every jurisdiction where you have buyers. If you sell digital goods to EU consumers, that means VAT registration and OSS filing. If you sell to UK consumers, that means UK VAT registration once you cross the threshold. For most solo developers, the MoR's premium is cheaper than the accountant you'd otherwise hire.

If you do use Stripe, enable **Stripe Tax** and let it calculate and collect the right amount. It doesn't file for you, but it turns a nightmare into a manageable quarterly task.

## Know Your Tax Nexus Before You Sell

The single most expensive mistake is assuming "I'm small, nobody cares." Tax authorities care about *nexus* — a legal connection that obligates you to register and collect.

- **EU VAT (OSS):** Selling digital services to EU consumers triggers VAT collection from the *first euro* in most member states — there's no minimum threshold for non-EU sellers. The One-Stop-Shop lets you file one return for all EU sales.
- **UK VAT:** Registration is required once your UK sales exceed £90,000 in a rolling 12-month period (thresholds change — verify current rules).
- **US sales tax:** Economic nexus thresholds vary by state (commonly $100k in sales or 200 transactions). Marketplaces and MoRs typically handle this for you.
- **Withholding tax:** If you're a non-US person earning from US customers, W-8BEN forms and treaty rates matter. Payment processors will ask for tax residency documentation — fill it out correctly the first time.

Keep a simple ledger: date, buyer country, amount, tax collected, tax remitted. A spreadsheet is fine until you're doing real volume.

## Get Paid Without Losing 5% to FX

Receiving money is its own problem. Your options:

- **Wise Business / Payoneer:** Multi-currency accounts with mid-market FX rates. Good for receiving from marketplaces and clients.
- **Stripe / Paddle payouts:** Usually land in your local bank in your local currency, with FX baked into the rate.
- **Mercury / Relay (US):** Useful if you incorporate in the US (e.g., a Delaware LLC) and want USD banking without a US address.

Watch the **total cost of conversion**, not just the headline fee. A 2% FX spread on a $10k monthly payout is $200/month — $2,400/year you could put toward an accountant or a better processor. Compare the all-in rate: processor fee + FX spread + payout fee.

Also consider **currency of pricing**. Pricing in USD is simplest for you but adds friction for buyers in other markets. Many solo developers price in USD and accept the conversion loss; others run regional pricing via their MoR's built-in tools.

## Structure Your Entity Deliberately

Your legal structure determines your tax and compliance burden. Common patterns for solo developers:

- **Stay a sole proprietor in your home country** and use an MoR. Simplest, lowest overhead, but personal liability and sometimes limited banking options.
- **Form a local company** (e.g., a UK Ltd, Estonian OÜ, or US LLC). More setup, but cleaner separation and often better payment processor access. A US LLC owned by a non-resident is popular but has filing obligations (Form 5472 for foreign-owned single-member LLCs — don't skip it; penalties are steep).
- **Use a global employment/contractor platform** if you hire help across borders. Deel, Remote, and similar handle local payroll compliance.

Whatever you choose, keep personal and business funds strictly separate, and document your tax residency. Double-taxation treaties exist, but they only help if your paperwork is consistent.

## Next Steps

1. **Audit your current setup:** List every country you've sold to and whether you're collecting the right tax. If you can't answer, switch to an MoR.
2. **Open a multi-currency account** with Wise or Payoneer and compare your all-in FX cost against your current processor.
3. **Fill out tax forms correctly** (W-8BEN, W-9 if applicable) and keep copies.
4. **Set a quarterly reminder** to review nexus thresholds and file any required returns.
5. **Talk to a cross-border accountant once** — a single consultation to validate your structure costs far less than fixing a compliance mess later.

The goal isn't to become a tax expert. It's to build a setup boring enough that you never have to think about it again.