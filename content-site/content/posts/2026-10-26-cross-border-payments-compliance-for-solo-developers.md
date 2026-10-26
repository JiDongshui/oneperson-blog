---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-10-26T08:49:42.804Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You shipped a product, and the first paying customer is in another country. Great — now you have to get their money into your bank account without tripping over sanctions, tax rules, or a payment processor's risk team. This article covers the practical path for a one-person company: picking a payment stack, handling tax and invoicing, and keeping compliance overhead proportional to your revenue.

## 1. Choose a Merchant of Record or a Payment Processor

The biggest fork in the road is **who is legally the seller**.

- **Payment processor** (Stripe, Paddle's non-MoR mode, Adyen, local gateways): you are the merchant of record. You collect VAT/GST/sales tax, file returns, and handle chargebacks. Stripe Tax and similar tools calculate and collect tax, but the filings are still yours.
- **Merchant of Record (MoR)** (Paddle, Lemon Squeezy, FastSpring, Gumroad): the MoR buys your product and resells it. They handle tax registration, collection, remittance, and most refund/chargeback disputes. You get a single payout, usually net of a higher fee (often 5% + fixed).

For a solo developer under roughly $500k/year in digital sales, an MoR is usually the right trade: you pay ~2–4% extra in fees to avoid registering for VAT in the EU, GST in Australia, and sales tax in dozens of US states. If your margins are thin or you sell physical goods, a processor plus a tax service like Stripe Tax or Paddle's tax tooling may be cheaper — but budget real time for registrations.

Practical check before you commit: does the provider support **your** country of residence for payouts, and does it support payouts in a currency your bank accepts without a $30 wire fee each time?

## 2. Know Your Tax Obligations by Customer Location

Two taxes matter most for digital products:

- **VAT/GST** applies where the *customer* is located (destination-based). The EU's OSS scheme lets you file one return for all EU sales once you exceed the €10,000 micro-business threshold. The UK has a £90,000 threshold for non-UK sellers (zero for UK-established businesses). Australia and Canada have their own low thresholds; many countries have none for non-residents.
- **US sales tax** is state-level. Economic nexus thresholds (commonly $100k or 200 transactions per state) mean you may owe tax in a handful of states even with no US presence. Marketplaces and MoRs often absorb this.

Keep evidence of customer location — IP address, billing country, and tax ID for B2B reverse-charge — because auditors ask for it. Store it with each transaction, not in a spreadsheet you reconstruct later.

If you sell B2B in the EU, collect VAT IDs and validate them with VIES; a valid ID means reverse charge and zero VAT on your invoice. Automate this in your checkout, not manually.

## 3. Invoicing and Record-Keeping That Survives an Audit

Your invoice needs, at minimum: your legal name and address, a sequential invoice number, the customer's details, a description of the service, the date, the amount, the tax rate and amount, and — for cross-border B2B — a note like "Reverse charge: VAT to be accounted for by the recipient."

Use a tool that generates compliant invoices automatically (Stripe Invoicing, Paddle, or accounting software like Wave or Xero). Do not hand-craft PDFs in a script unless you enjoy renumbering sequences after a duplicate.

Keep records for the statutory period in each jurisdiction — commonly 7 years in the EU and UK, 3–7 years in the US depending on the state. Store them in cloud storage with versioning, and export a monthly CSV of all transactions to a folder you control. If a processor shuts your account, you still need those records.

## 4. Sanctions, KYC, and Payout Reality

Compliance is not only tax. Payment providers run KYC and sanctions screening, and a solo developer's account can get frozen for a mismatch between the business description and actual transactions.

- **Describe your business accurately** during onboarding. "Software subscription" is fine; "consulting" when you sell a SaaS product will trigger questions.
- **Screen against sanctions lists** if you sell B2B to companies. OFAC, EU, and UK lists are downloadable; a monthly check of new customers by country and name is cheap insurance. Block sales to comprehensively sanctioned jurisdictions outright.
- **Expect payout friction.** Wise, Payoneer, and Revolut Business are common for solo operators; compare FX spread, not just the headline fee. A 1% spread on $5,000/month is $600/year.
- **Keep a separate business account.** Commingling personal and business funds is the fastest way to fail a provider's review.

## 5. Keep the Stack Small

Every additional provider is another KYC review, another set of terms, and another place your money can get stuck. A workable solo stack is: one MoR or processor, one business bank/multi-currency account, one accounting tool, and one backup payout method. Review fees and tax thresholds once a quarter, and revisit the MoR-versus-processor decision when revenue crosses a threshold that makes the extra fees painful.

## Next Steps

1. Estimate your annual digital sales by region; if EU/UK/Australia sales are material, price out an MoR against processor + tax service.
2. Verify your chosen provider supports payouts to your country and currency, and open a dedicated business account.
3. Configure tax calculation and invoice templates, then generate one test invoice per region (EU B2B, EU B2C, US, UK) and check them against local requirements.
4. Set up automated monthly exports of transactions and invoices to storage you control.
5. Add a quarterly calendar reminder to check sanctions lists, tax thresholds, and provider fee changes.