---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-10-29T15:02:10.378Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

If you sell software, courses, or services to customers outside your home country, you need a way to get paid and a way to stay out of trouble with tax and financial regulators. For a one-person company, this is the part of the business nobody warns you about. Here's a practical map of the landscape, with the tradeoffs that actually matter at your scale.

## Start With the Right Payment Rail

The first decision is how money reaches you. Most solo developers default to Stripe or Paddle, but the choice affects your compliance burden more than you might expect.

**Merchant of Record (MoR) platforms** — Paddle, Lemon Squeezy, and Gumroad — sit between you and the customer. They are the legal seller, which means they handle sales tax, VAT, and GST collection and remittance on your behalf. You receive a single payout. The tradeoff is fees (typically 5–10% plus per-transaction costs) and less control over checkout and customer relationships.

**Payment processors** — Stripe, PayPal, and Wise — put you in the seller's seat. You get lower fees and full control, but you become responsible for tax registration, collection, and filing in every jurisdiction where you have tax obligations. Stripe Tax can calculate and collect the right amount, but *you* still register and file.

For a solo developer just starting out, an MoR is usually the right call. It's boring, and boring is what you want when you're the entire finance department. Once volume justifies the fee difference, you can migrate to a processor and automate filings with tools like Stripe Tax plus a service like TaxJar or Paddle's own invoicing.

One more thing: get paid in a currency you can actually use. Wise multi-currency accounts let you hold balances in USD, EUR, and GBP and convert at near-mid-market rates, which beats letting a processor auto-convert at a 2–3% spread.

## Know Your Tax Obligations (and Their Thresholds)

Cross-border tax has two dimensions: **income tax** (where you're resident) and **consumption tax** (where the customer is). The second one is where solo developers get surprised.

- **EU VAT**: Digital services to EU consumers are taxed at the customer's country rate. The One-Stop-Shop (OSS) scheme lets you file a single return for all EU sales — but you must register. There's no minimum threshold for non-EU sellers.
- **UK VAT**: Similar story, with a £90,000 registration threshold that doesn't apply to non-established sellers of digital services.
- **US sales tax**: Economic nexus thresholds vary by state (commonly $100k in sales or 200 transactions). Marketplaces and MoRs usually collect for you; direct sales may not.
- **GST in Australia, Canada, Japan, and others**: Each has its own registration trigger. Most are low or zero for digital services.

The practical rule: if you sell digital goods to consumers, assume you have registration obligations almost everywhere, and let an MoR absorb them until you're big enough to handle them yourself. Document your reasoning — if a tax authority ever asks, a clear record of why you chose your structure is worth a lot.

## Handle the Money-Laundering and Sanctions Layer

"Compliance" isn't only tax. Payment providers are regulated financial institutions, and they push Know Your Customer (KYC) and anti-money-laundering (AML) duties onto you as a merchant.

Expect to provide: proof of identity, business registration (or a sole-trader declaration), a description of what you sell, and sometimes a website review. Keep your Stripe or Paddle dashboard updated — a stale business description is a common cause of frozen payouts.

Sanctions screening matters if you sell to businesses or high-risk regions. Most processors screen automatically, but you should know your customer base. If you sell to anyone in a sanctioned country or to entities on restricted lists, stop and get advice before accepting the payment. A single blocked transaction can trigger an account review that takes weeks to resolve.

## Protect Yourself With Simple Operational Habits

You don't need a compliance department. You need a handful of habits:

1. **Separate accounts.** A dedicated business bank account and a dedicated payment processor account. Never mix personal and business funds — it complicates everything from tax to KYC.
2. **Keep records.** Invoices, payout reports, and exchange-rate records for every transaction. Most jurisdictions require you to retain these for 5–7 years.
3. **Reconcile monthly.** Match processor payouts to your bank deposits and your accounting ledger. A 30-minute monthly routine prevents a painful annual cleanup.
4. **Watch thresholds.** Set calendar reminders for the registration thresholds in your main markets, and review them quarterly as your revenue grows.
5. **Read the fine print on refunds and chargebacks.** Cross-border chargebacks are expensive and slow. Clear refund policies reduce disputes.

## Next Steps

Pick one action from each area and do it this week:

- **Payments**: If you're not yet using an MoR, open a Paddle or Lemon Squeezy account and run a test transaction end-to-end. If you already use a processor, enable Stripe Tax and check your nexus exposure in your top three markets.
- **Tax**: List every country you've sold to in the last 12 months. For each, note whether you're under an MoR (covered) or selling directly (exposed). Register where you're exposed before the next filing deadline.
- **Compliance**: Update your processor dashboard with an accurate business description and confirm your KYC documents are current.
- **Operations**: Open a Wise multi-currency account, set up a monthly reconciliation reminder, and create a folder structure for invoices and payout reports.

None of this is glamorous, but it's the difference between a business that scales smoothly and one that gets its payouts frozen at the worst possible moment. Do the boring work now, and you can spend your time on the product.