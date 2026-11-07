---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-07T10:00:10.523Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

Selling software or services internationally is easier than ever, but getting paid across borders—and staying compliant—is where solo developers usually get stuck. Banks ask for business plans, payment processors freeze accounts without warning, and tax rules change by country. This guide covers the practical essentials: choosing a payment stack, handling tax and reporting obligations, and keeping your accounts from being flagged.

## Choose Your Payment Stack Deliberately

Most solo developers default to Stripe or PayPal because they're familiar, but the right choice depends on where your customers are and how much volume you expect.

**Stripe** is the best default for SaaS and digital products. It supports 135+ currencies, handles subscriptions and invoicing, and offers Stripe Tax for automated sales tax/VAT calculation. The catch: Stripe availability varies by country, and your account's country determines which payment methods you can accept.

**Paddle and Lemon Squeezy** act as Merchant of Record (MoR). They handle sales tax, VAT, and compliance on your behalf, remitting taxes to authorities and paying you a net amount. You give up roughly 5% + fees, but for solo developers selling to consumers in the EU/UK, this can eliminate hours of compliance work per month. If you sell digital goods to EU consumers, an MoR is often the simplest legal path.

**Wise Business** is useful for receiving bank transfers and holding multiple currencies without brutal FX spreads. Pair it with a payment processor rather than using it as one.

**PayPal** remains useful as a secondary option for customers who distrust card entry, but avoid making it primary—dispute resolution favors buyers heavily.

Practical setup: one primary processor (Stripe or an MoR), Wise for payouts and currency holding, and PayPal as a fallback. Don't stack five processors; each adds reconciliation work.

## Understand Where You Owe Tax

Two separate obligations trip people up: **income tax** (on your profits, in your country of residence) and **consumption tax** (VAT/GST/sales tax, charged to customers based on their location).

For income tax, the main risk is **permanent establishment**. If you work from a country for months, or store inventory there, you may create a taxable presence. Remote software sales rarely do, but check your local rules if you travel or relocate.

For consumption tax, thresholds matter:

- **EU VAT**: Digital services to EU consumers require VAT registration in at least one EU country (via the OSS scheme) once you exceed €10,000/year in cross-border EU sales. Below that, you can charge your home country's rate.
- **UK VAT**: Similar threshold (£90,000 for UK-established businesses; digital services to UK consumers have different rules).
- **US sales tax**: Economic nexus thresholds vary by state (commonly $100,000 in sales or 200 transactions). SaaS taxability differs by state—some tax it, some don't.
- **Australia GST**: A$75,000 threshold for digital services to Australian consumers.

An MoR absorbs all of this. If you process payments yourself, use Stripe Tax or a service like Quaderno to calculate and file. Budget a few hundred dollars per year for filing help—doing it manually across jurisdictions is a poor use of your time.

## Keep Your Accounts From Being Flagged

Payment processors and banks run automated risk checks. Solo developers trigger them constantly: sudden volume spikes, mismatched business names, customers in high-risk countries, or chargebacks above ~1%.

Reduce friction:

- **Use a consistent legal name** across your bank, processor, and invoices. A mismatch between "John Smith" and "Smith Digital LLC" invites review.
- **Describe your products clearly** in your processor dashboard. "Digital software subscription" beats "consulting."
- **Respond to verification requests within 24 hours.** Frozen accounts usually start with an unanswered email.
- **Keep chargebacks under 0.5%.** Clear pricing, easy cancellation, and responsive support prevent most disputes.
- **Don't route personal spending through your business account.** Commingling looks like fraud to risk engines.

## Handle Payouts and FX Without Losing Margin

Currency conversion quietly eats 2–4% if you're careless. If you earn in USD but live in the EU, receive payouts in USD to a multi-currency account (Wise, Revolut Business), then convert when rates are favorable rather than letting your processor auto-convert at a spread.

Track your effective FX rate on each payout. Over a year, a 2% difference on $50k is $1,000—worth a few minutes of attention.

Also keep clean records: processor statements, payout confirmations, and invoices. Most jurisdictions require retaining these for 5–7 years. A simple folder structure by year and processor is enough; don't over-engineer it.

## Next Steps

1. **Decide MoR vs. direct processing.** If you sell digital products to EU/UK consumers and want zero tax admin, start with Paddle or Lemon Squeezy. Otherwise, use Stripe + Stripe Tax.
2. **Map your tax exposure.** List the countries your customers are in, check thresholds, and register where required—or confirm your MoR covers it.
3. **Open a multi-currency account** (Wise or similar) and route payouts there instead of auto-converting.
4. **Audit your processor account** for name consistency, clear product descriptions, and a chargeback rate under 0.5%.
5. **Set a quarterly review** to reconcile payouts, check FX costs, and confirm you're still under or correctly over each tax threshold.