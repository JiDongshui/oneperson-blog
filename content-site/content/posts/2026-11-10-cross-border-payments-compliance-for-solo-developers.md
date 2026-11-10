---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-10T11:05:04.481Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software to customers in other countries is one of the highest-leverage moves a solo developer can make. Your marginal cost stays near zero, but your addressable market multiplies. The friction isn't the code—it's getting paid and staying compliant without a finance team. Here's a practical playbook.

## Pick a Merchant of Record Before You Pick a Gateway

The single biggest decision is whether you become the "merchant of record" (MoR) or let someone else be it.

- **Payment gateways** (Stripe, PayPal, Adyen) process payments but *you* are the merchant of record. You own tax registration, remittance, refunds, and fraud liability.
- **Merchant-of-record platforms** (Paddle, Lemon Squeezy, FastSpring) become the legal seller. They handle sales tax/VAT/GST collection and remittance globally and pay you a net payout.

For a one-person company, an MoR is usually the right default. The 5–8% fee sounds steep versus Stripe's ~3%, but it buys you global tax compliance, invoicing, and chargeback handling you'd otherwise do at 11pm. Choose a raw gateway only if you have a narrow, well-understood tax footprint or need tight control over the checkout experience.

## Understand What "Tax Compliance" Actually Means

Cross-border tax isn't one thing. The main buckets:

1. **VAT/GST on digital services** — The EU, UK, and dozens of other jurisdictions tax B2C digital sales based on the *customer's* location, not yours. Many have registration thresholds (the EU's OSS scheme lets you file one return for all member states once registered).
2. **US sales tax** — Nexus rules mean you may owe tax in states where you have economic presence (often triggered by revenue or transaction counts). SaaS taxability varies by state.
3. **Income tax** — Where your company is resident and whether you have a "permanent establishment" abroad. Selling software alone rarely creates one, but check your home country's rules.

Two pragmatic paths: use an MoR and let them own 1 and 2, or register for the EU OSS/IOSS and a handful of US states yourself. Don't guess—a one-hour consultation with an international tax accountant costs far less than a retroactive VAT assessment.

## Build a Checkout That Survives Real-World Buyers

Compliance aside, your payment flow has to work for customers whose cards, currencies, and tax rules differ from yours.

- **Localize currency and payment methods.** Displaying prices in the buyer's currency and offering local methods (SEPA in Europe, iDEAL in the Netherlands, UPI in India) lifts conversion materially.
- **Collect the right data.** For B2B EU sales, you need a valid VAT ID to apply reverse-charge (0% VAT). Validate it against VIES before checkout completes.
- **Store invoices.** Many jurisdictions require you to retain invoices for 7–10 years. Use a platform that generates compliant, numbered invoices automatically.
- **Handle refunds and disputes.** Chargebacks are a cost of doing business. Keep a clear refund policy and respond to disputes with delivery evidence (login logs, download records).

A minimal, robust flow: hosted checkout → webhook to your backend → provision access → store the transaction record with tax breakdown and invoice ID.

## Keep Your Records Audit-Ready From Day One

You don't need accounting software with 40 integrations. You need a repeatable trail.

- Separate business and personal finances completely.
- Reconcile payouts monthly against your platform's reports.
- Keep contracts, invoices, and tax registrations in one folder.
- Track your revenue by country—this is what determines where you may owe tax.

Automate what you can with webhooks and a simple ledger, but the discipline of monthly reconciliation is what saves you during an audit. If you're processing meaningful volume, a bookkeeper at a few hours a month is cheaper than untangling a year of mess.

## Next Steps

1. **Decide MoR vs. gateway** based on your target markets and tolerance for tax admin. If unsure, start with an MoR.
2. **Book a 60-minute tax consult** to map your obligations for your top three customer countries.
3. **Set up a compliant checkout** with currency localization, VAT-ID validation, and automatic invoicing.
4. **Create a monthly reconciliation ritual** and a single folder for all compliance documents.
5. **Document your refund and chargeback policy** before your first dispute arrives.

Cross-border selling rewards preparation more than cleverness. Get the payment rails and tax posture right early, and you can focus on shipping code instead of chasing paperwork.