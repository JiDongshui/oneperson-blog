---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-09T11:25:22.941Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

As a solo developer selling software globally, you need to get paid by customers in dozens of countries without drowning in paperwork. The good news: you don't need a legal team or a bank relationship in every market. The bad news: "just slap Stripe on it" is only half the story. Here's a practical breakdown of payment rails, tax obligations, and the traps that catch one-person companies.

## Choose Your Payment Rails Before You Build

Most solo developers should start with a **Merchant of Record (MoR)** like Paddle or Lemon Squeezy rather than a raw processor like Stripe. The distinction matters enormously:

- **Payment processors (Stripe, PayPal)** treat you as the seller. You are responsible for calculating, collecting, and remitting VAT/GST/sales tax worldwide.
- **Merchants of Record** become the legal seller of record. They handle tax calculation and remittance, fraud, and chargebacks in exchange for a higher fee (typically 5% + a cut versus Stripe's ~2.9% + $0.30).

For a solo dev selling a $20/month SaaS to customers in 40 countries, the MoR fee is usually cheaper than the accounting and compliance time you'd otherwise burn. If your margins are thin and your customer base is concentrated in one or two tax jurisdictions, a processor plus a tax service (like Stripe Tax) can work.

Whatever you choose, integrate it behind an abstraction layer. Payment providers change terms, drop countries, and freeze accounts. A `PaymentProvider` interface with `createCheckout()`, `handleWebhook()`, and `refund()` methods lets you swap vendors without rewriting your app.

## Understand Where You Owe Tax

The two taxes that bite solo developers are **VAT (EU/UK)** and **US state sales tax**.

**EU VAT:** If you sell digital services to EU consumers, VAT is due in the customer's country at their local rate. The good news for small sellers: the EU's **OSS (One-Stop Shop)** scheme lets you file a single quarterly return covering all member states. There's also a €10,000/year threshold below which you can charge your home country's VAT instead. If you're outside the EU entirely, you generally have no EU VAT registration obligation until you exceed thresholds — but platforms like the App Store and Google Play collect and remit on your behalf anyway.

**US sales tax:** Economic nexus rules mean you owe tax once you cross a state's threshold (commonly $100k in sales or 200 transactions, though some states have no threshold). SaaS taxability varies wildly — taxable in some states, exempt in others. This is where a MoR or Stripe Tax saves you from maintaining a 50-row lookup table.

**Income tax:** You pay income tax where you're tax-resident, not where customers are. A US customer paying you doesn't create a US tax filing obligation unless you have a physical presence or employees there. Don't over-register.

## Keep Compliance Artifacts From Day One

The paperwork you skip today becomes a five-figure problem at audit. Set up these habits early:

1. **Store invoices immutably.** Every customer needs a compliant invoice (sequential number, your business details, VAT ID where applicable, tax breakdown). Generate PDFs and archive them in object storage with a write-once policy.
2. **Log tax decisions.** When your code decides "this customer pays 0% VAT because they provided a valid EU VAT ID," record *why*. VIES validation results, IP address, and billing country should be persisted with each transaction.
3. **Validate VAT IDs.** Use the EU VIES API and the UK's equivalent. Cache results but re-validate periodically — a customer's VAT number can be deregistered after you charged them 0%.
4. **Watch currency and FX.** If you price in USD but settle in EUR, your revenue figures shift with exchange rates. Store the settlement currency and rate alongside every transaction so your books reconcile.

## Handle Payouts and Banking Realistically

Receiving money is different from keeping it. Stripe and MoRs pay out on a rolling schedule (often 2–7 days), and cross-border transfers carry fees and FX spreads. For a solo dev, a **multi-currency account** (Wise, Revolut Business) lets you receive in USD/EUR/GBP and convert on your schedule rather than at the processor's rate.

Also plan for **chargebacks and reserves**. High-risk categories or new accounts can trigger rolling reserves (a percentage of sales held for 90+ days). Keep 3–6 months of operating expenses liquid so a frozen payout doesn't stall your infrastructure bills.

## Next Steps

- **Pick one rail and ship it.** Start with an MoR if you're selling to consumers globally; use Stripe + Stripe Tax if you're B2B and can validate VAT IDs.
- **Abstract the integration** behind an interface so you can migrate later.
- **Set up invoice archiving and tax-decision logging** before your first paying customer, not after.
- **Register only where you must.** Track nexus thresholds quarterly rather than registering defensively.
- **Open a multi-currency account** and reconcile payouts monthly against your processor reports.
- **Talk to an accountant once.** A single hour with someone who knows cross-border SaaS will save you dozens of hours and possibly a penalty.