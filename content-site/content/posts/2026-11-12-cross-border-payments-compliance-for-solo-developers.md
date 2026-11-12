---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-12T10:59:11.550Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software internationally as a one-person company is easier than ever—until money crosses a border. Suddenly you're dealing with currency conversion, tax withholding, sanctions screening, and a stack of regulations that were designed for companies with compliance departments. The good news: you don't need a compliance department. You need a handful of good defaults and the discipline to keep records.

This guide covers the practical minimum for a solo developer accepting payments from customers in multiple countries.

## Choose Your Payment Rails Deliberately

Most solo developers reach for Stripe or Paddle by default, and that's usually right—but for different reasons.

**Merchant of record (MoR) platforms** like Paddle, Lemon Squeezy, and FastSpring take on the compliance burden. They become the legal seller, handle VAT/GST registration and remittance, and deal with chargebacks. You trade roughly 5% of revenue for not having to register for tax in 30 jurisdictions. For a solo dev selling digital products, this is often the single highest-leverage decision you can make.

**Payment processors** like Stripe, PayPal, and Adyen treat you as the merchant. You get lower fees (2.9% + 30¢ is typical) but you own every tax and compliance obligation. Stripe Tax can calculate and collect VAT/GST, but registration and filing are still on you.

A pragmatic pattern many solo devs use: start with an MoR to validate the business and avoid early compliance work, then migrate to Stripe once volume justifies the fee difference and you have an accountant.

## Understand Where You Owe Tax

Two separate tax regimes hit cross-border digital sales:

**Indirect tax (VAT/GST/sales tax).** The EU's VAT OSS scheme lets you register once and file quarterly for all member states, with a €10,000 threshold before you must charge destination-country rates. The UK has its own £90,000 threshold for non-established sellers (but note: non-UK sellers often must register from the first sale for B2C digital services). Australia, Canada, Japan, and many US states have similar economic nexus rules. The pattern is consistent: below a revenue or transaction threshold you're usually fine, above it you must register.

**Direct tax (income tax).** You pay income tax where you're tax-resident. Double-tax treaties prevent paying twice, but you may need to claim foreign tax credits. US customers may ask for a W-9; non-US sellers filling out a W-8BEN is the counterpart. Keep these on file.

The practical rule: track your revenue by customer country from day one. You can't decide whether you've crossed a threshold if you don't have the data. Most payment platforms expose this via API or CSV export—store it somewhere queryable.

## Keep Compliance Records Without Building a System

You don't need a compliance platform. You need four things:

1. **A revenue-by-country ledger.** Export monthly and store raw files. A dated folder of CSVs is fine.
2. **Proof of tax status.** W-8BEN/W-9 forms for business customers, stored per customer.
3. **Terms of service and privacy policy** that name your legal entity, jurisdiction, and governing law. These are cheap to get right and expensive to get wrong.
4. **Sanctions awareness.** Payment processors screen automatically, but if you invoice directly (wire transfer, crypto), you're responsible for not accepting money from sanctioned parties. A quick check against the OFAC SDN list before onboarding a large B2B customer is prudent.

Automate the boring part: a scheduled script that pulls transactions from your processor's API, normalizes currency, and appends to a spreadsheet or SQLite database will save you hours at tax time. Twenty lines of Python beats a $200/month SaaS for a solo operation.

## Watch the Currency and Banking Details

Two operational traps catch solo developers:

**FX spread.** Processors convert at rates 1–3% worse than interbank. If you invoice in USD but bank in EUR, that spread is real money. Where possible, hold a multi-currency account (Wise, Revolut Business, Mercury for US entities) and convert in batches rather than per-transaction.

**Payout restrictions.** Some processors won't pay out to certain jurisdictions, and some banks flag frequent small international deposits. Confirm your payout path works *before* you launch, not after your first $5,000 is stuck. Test with a small transaction end-to-end.

Also confirm your business structure can legally receive foreign payments—a US LLC with a non-resident owner can usually use Stripe, but some processors require a US bank account and EIN. Verify before building your checkout.

## Next Steps

1. **Pick your rail.** If you're pre-revenue or under ~$50k/year, start with an MoR (Paddle or Lemon Squeezy) and skip tax registration entirely.
2. **Instrument revenue by country.** Add a scheduled export from your payment provider to a local database this week.
3. **Set threshold alerts.** Note the EU €10,000, UK, and Australian thresholds; check your revenue-by-country report quarterly.
4. **Draft or review your ToS and privacy policy** with a lawyer familiar with cross-border digital sales—one hour of their time is worth it.
5. **Test your payout path** with a real international transaction before you need it.
6. **Talk to an accountant** once you cross any threshold or hit ~$50k/year in cross-border revenue. Compliance is cheap to do proactively and expensive to fix retroactively.