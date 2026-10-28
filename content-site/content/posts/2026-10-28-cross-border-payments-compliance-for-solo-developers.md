---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-10-28T09:35:34.554Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software from anywhere to anywhere sounds like the ultimate solo dream—until you try to actually get paid. The moment a customer in Germany wants to pay in euros while you sit in Brazil, you've stepped into a maze of currencies, tax rules, and banking friction that big companies have whole departments for. You don't. But you can still build a profitable cross-border business if you keep the setup boring and the compliance intentional.

Here's a practical playbook for getting paid internationally without drowning in paperwork.

## Pick a Payment Stack That Does the Heavy Lifting

Your first decision is how money actually reaches you. For solo developers, the winning strategy is to let a merchant of record (MoR) absorb as much complexity as possible.

- **Paddle or Lemon Squeezy** act as the seller of record. They handle sales tax/VAT/GST collection and remittance in most jurisdictions, and they pay you a single net amount. You trade a higher fee (roughly 5% + fixed) for not registering for VAT in 30 countries.
- **Stripe** gives you more control and lower fees, but *you* become responsible for tax registration and remittance. Stripe Tax calculates the amounts, but you still file and pay.
- **Wise Business** or **Payoneer** are good for receiving payouts and holding multiple currencies, not for card processing.

A common hybrid: use an MoR for consumer subscriptions and Stripe for B2B invoices where the customer handles their own tax. Don't over-engineer—start with one MoR and only add Stripe when a real customer demands it.

One rule that saves pain: **price in your customer's currency, settle in yours.** Stripe and Paddle both support multi-currency pricing. Absorbing FX variance in your pricing is far cheaper than the conversion fees and cart abandonment you get from forcing USD on everyone.

## Understand the Tax Triggers Before You Sell

Compliance anxiety usually comes from not knowing *when* obligations kick in. Three thresholds matter most:

1. **VAT/GST registration thresholds.** The EU's OSS scheme lets you register once and file for all member states, but only after you cross the €10,000 cross-border threshold (or register voluntarily). The UK, Australia, and Canada each have their own rules. An MoR sidesteps all of this.
2. **US sales tax nexus.** If you're outside the US, economic nexus is triggered by sales volume into a state (commonly $100k or 200 transactions). Digital goods rules vary wildly by state. Again, an MoR handles it; with Stripe you'd need a service like TaxJar or Avalara.
3. **Income tax residency.** This is the one people forget. Where you're tax-resident determines what you owe on profits, not just sales tax. If you're a digital nomad, get clear on your residency status before you scale—this is worth one consultation with an accountant who knows cross-border freelancing.

Keep records from day one: invoices, payout statements, and a simple spreadsheet mapping revenue by country. When a threshold approaches, you'll have the data to act instead of panic.

## Manage FX and Payout Costs Deliberately

Every currency conversion is a silent tax on your margin. Two or three percentage points vanish per conversion if you're careless.

- **Batch payouts.** Instead of converting every sale, let balances accumulate and convert on a schedule. Fewer conversions, better rates.
- **Hold a multi-currency balance** with Wise or your processor so you can pay expenses in local currency (e.g., pay a contractor in euros from euro revenue).
- **Watch the spread, not just the headline fee.** A "1% conversion fee" often hides a 1–2% markup on the exchange rate. Compare the effective rate against mid-market.

For a solo business doing $5k–$20k/month, disciplined FX handling is easily worth a few hundred dollars a year in recovered margin.

## Keep Compliance Lightweight but Documented

You don't need a legal team. You need a repeatable routine:

- **Terms of service and privacy policy** that state your legal entity, governing law, and refund policy. Use a generator, then have it reviewed once.
- **A refund policy** that matches your processor's dispute rules—chargebacks are expensive and common in cross-border consumer sales.
- **Invoices** with your business name, address, tax ID (if any), and the customer's details. Most processors generate these; verify they meet local requirements.
- **A single source of truth** for your financial records—connect your processor and bank to a tool like Wave or a simple ledger. Reconcile monthly.

When in doubt about a specific country's rules, the cheapest move is a one-hour consultation with a cross-border accountant. That's a $150–$300 expense that can prevent a five-figure problem.

## Next Steps

1. **Choose your primary payment rail this week.** If you sell to consumers globally, start with an MoR. If you sell B2B, evaluate Stripe plus Stripe Tax.
2. **Map your top three customer countries** and note their VAT/GST and US nexus thresholds. Set calendar reminders for when you approach them.
3. **Open a multi-currency account** (Wise or Payoneer) and route payouts there instead of converting on every sale.
4. **Book one accountant consultation** focused on your tax residency and cross-border obligations—before your first big month, not after.
5. **Set up a monthly reconciliation habit** so your records are always audit-ready and thresholds never surprise you.

Cross-border selling rewards the boring and the prepared. Build a simple stack, know your triggers, and let the compliance run quietly in the background while you ship product.