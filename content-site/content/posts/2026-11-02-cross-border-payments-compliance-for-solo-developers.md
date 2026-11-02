---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-02T10:56:48.196Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
distributed: devto
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software internationally as a one-person company is easier than ever—until money has to cross a border. Then you meet three-headed problems: getting paid, keeping the tax authorities happy, and not getting your account frozen. This guide covers the pragmatic path: what to set up, what to avoid, and where the real risks hide.

## Pick a Payment Rail That Matches Your Customers

Most solo developers default to Stripe, and for good reason: it handles card processing, subscriptions, and 135+ currencies in one dashboard. But Stripe is not always the cheapest or most available option.

- **Stripe / Paddle / Lemon Squeezy**: Best for SaaS and digital products. Paddle and Lemon Squeezy act as *merchant of record* (MoR), meaning they handle sales tax and VAT collection on your behalf. For a solo developer, an MoR is often worth the ~5% fee because it removes a huge compliance burden.
- **PayPal**: Ubiquitous but expensive (4–5% + FX spread) and prone to holds on new accounts. Keep it as a fallback, not a primary rail.
- **Wise Business / Payoneer**: Great for receiving B2B invoices and paying contractors. Wise gives you local account details (IBAN, ACH, sort code) in multiple countries, which reduces friction for clients.
- **Crypto / stablecoins**: Only if your customers demand it. Treat it as a niche add-on, not a foundation.

**Actionable tip:** If you sell to consumers in the EU or UK, use an MoR. If you sell B2B to a handful of companies, invoice them directly via Wise or Stripe Invoicing and let them handle their own VAT reverse-charge.

## Understand Where You Owe Tax

Cross-border tax is where solo developers get blindsided. Two concepts matter most:

**1. VAT/GST on digital services.** The EU, UK, Australia, and many others require you to charge VAT based on the *customer's location*, not yours. This is called the destination principle. The EU's OSS (One-Stop Shop) lets you file a single return for all EU sales once you exceed the €10,000 threshold. Below that, you can charge your local rate.

**2. Income tax and permanent establishment.** If you're a sole trader in Country A selling to customers in Country B, you generally owe income tax only in Country A—unless you create a *permanent establishment* (office, employee, dependent agent) in Country B. Remote software sales rarely trigger this, but don't set up a local entity or hire locally without advice.

**Actionable tip:** Use an MoR until you're doing meaningful volume (say, $100k+/year). Then talk to an accountant who specializes in cross-border digital businesses. A one-hour consultation costs less than a single penalty.

## Banking, FX, and the Hidden Costs

Currency conversion is a silent tax on solo developers. If you earn in USD, EUR, and GBP but live in a country with a different currency, you can lose 2–4% per conversion through banks.

- Open a **multi-currency business account** (Wise, Revolut Business, or a local fintech). Hold balances in the currencies you earn and convert only when you need to.
- Watch **FX spreads**, not just headline fees. A "0% fee" transfer with a 2% spread is worse than a 0.5% fee with a tight spread.
- Keep **separate accounts** for business and personal. This simplifies bookkeeping and makes audits painless.

**Actionable tip:** Set a rule: never convert more than you need for the next 30 days of expenses. This reduces exposure to rate swings and keeps your accounting simple.

## Compliance Hygiene for a One-Person Company

You don't need a compliance department, but you do need a paper trail. The basics:

- **Invoices**: Include your business name, address, tax ID, the customer's details, a sequential invoice number, and the VAT treatment (e.g., "reverse charge" or "VAT exempt"). Most invoicing tools (Stripe, Wise, Wave) handle this.
- **Records**: Keep contracts, invoices, and payment receipts for at least 5–7 years, depending on your jurisdiction.
- **Sanctions and KYC**: Payment processors will freeze accounts if a customer matches a sanctions list. Don't fight it—respond quickly with documentation. Avoid customers in sanctioned regions entirely.
- **Data protection**: If you collect customer data (you do), you're subject to GDPR or similar. A simple privacy policy and data minimization go a long way.

**Actionable tip:** Write a one-page "compliance runbook" for yourself: what to do if a payment is disputed, if a processor asks for KYC documents, or if a customer requests a VAT invoice. Future-you will thank present-you.

## Next Steps

1. **Audit your current setup**: List every payment rail, currency, and country you touch. Identify the biggest FX leak.
2. **Choose an MoR or direct invoicing** based on your customer mix, and migrate if the fees or compliance burden justify it.
3. **Open a multi-currency account** and stop converting unnecessarily.
4. **Book a one-hour call** with a cross-border accountant to confirm your VAT and income tax obligations.
5. **Write your compliance runbook** and store it where you'll find it during a crisis.

Cross-border payments aren't glamorous, but getting them right is one of the highest-leverage things a solo developer can do. Keep it simple, keep records, and let the processors handle what they're good at.