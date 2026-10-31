---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-10-31T09:33:39.552Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You shipped a product. A customer in Germany wants to pay you, and you live in Brazil. Suddenly you're not just a developer — you're running a small financial operation with tax and regulatory exposure in multiple jurisdictions. This guide covers the practical setup that works for one-person companies, not the enterprise playbook.

## Pick Your Payment Rails Before You Pick a Bank

Most solo developers overthink the banking side and underthink the payment side. Start with how money will actually arrive.

**Card payments (Stripe, Paddle, Lemon Squeezy):** The easiest path. Stripe works in ~45 countries; Paddle and Lemon Squeezy act as Merchant of Record (MoR), meaning *they* handle sales tax/VAT and you receive a single payout. The MoR model is the single biggest compliance shortcut available to solo devs — you trade ~5% fees for not registering for VAT in 30 countries.

**Bank transfers (Wise, Payoneer):** Cheap for B2B invoices but you own the invoicing and tax collection. Wise Business gives you local account details (IBAN, US routing number) in multiple currencies, so customers pay domestically.

**Crypto (USDC, BTC):** Only if your customers demand it. Accounting is painful and some jurisdictions treat it as a taxable disposal on every transaction.

My recommendation for most solo devs: **use an MoR for consumer/SMB sales, and Wise for direct B2B contracts.** You get compliance coverage plus low-cost international transfers.

## Understand Where You Actually Owe Tax

The two taxes that bite solo developers are **VAT/GST** (consumption tax) and **income tax**.

For digital services sold to consumers (B2C), the destination country typically claims VAT. The EU's OSS scheme, UK VAT registration (£90k threshold for non-established sellers is effectively zero), and Australia's GST on digital goods all apply. This is why the MoR route matters — the platform is the seller of record.

For B2B sales, the reverse-charge mechanism usually applies: the buyer self-assesses VAT, and you invoice with a note like "VAT reverse charged — Article 196, Directive 2006/112/EC." No registration needed in most cases, but you must collect and store the customer's VAT number and validate it via VIES.

Income tax is simpler conceptually: you pay where you're tax-resident. But watch for **permanent establishment** rules — if you work from a country for months, you may create a taxable presence there. Keep trips short and document your tax residency.

## Invoicing and Record-Keeping That Survives an Audit

Every cross-border invoice needs: your legal name and address, the customer's name and address, a sequential invoice number, date of supply, description, unit price, VAT rate and amount (or reverse-charge note), and your tax ID. Missing any of these can invalidate the customer's VAT deduction and get the invoice rejected.

Automate this. A small script or a tool like Invoice Ninja can generate compliant PDFs from your database. Store invoices for the legally required period — typically 7–10 years in the EU, 7 in the UK, 5 in many other places. Keep them in a cloud bucket with versioning, not a local folder.

For currency conversion, record the exchange rate on the invoice date. Use a published rate (ECB, your bank's) and be consistent.

## Banking, FX, and the Hidden Costs

A common mistake: receiving USD into a local account and letting the bank convert at 3–4% spread. Instead:

- Open a **Wise Business** or **Payoneer** account for multi-currency holding.
- Invoice in your customer's currency (USD, EUR) to avoid surprising them.
- Convert to your home currency in batches when rates are favorable, or on a fixed schedule to avoid FX speculation.

Keep business and personal money strictly separate. Even as a sole proprietor, a dedicated business account simplifies bookkeeping and looks professional on invoices. If you incorporate (LLC, Ltd, GmbH), you'll need it anyway.

## A Minimal Compliance Stack

Here's a lean setup that covers most solo developers:

1. **MoR platform** (Paddle/Lemon Squeezy) for consumer SaaS and digital products.
2. **Stripe** for B2B card payments where you control invoicing.
3. **Wise Business** for receiving bank transfers and holding currencies.
4. **Accounting tool** (Wave for free, Xero/QuickBooks if you need VAT filing) connected to your bank feeds.
5. **A folder structure** — `/invoices/2025/`, `/receipts/2025/`, `/contracts/` — synced to cloud storage with versioning.
6. **A calendar reminder** for quarterly VAT/estimated tax filings in your jurisdiction.

Budget two to three hours per month for reconciliation. It's boring but it prevents the panic of a tax authority letter you can't answer.

## Next Steps

1. **Audit your current sales flow.** List every country your customers come from and how they pay. Identify any B2C digital sales where you might owe VAT/GST.
2. **Decide on MoR vs. direct.** If you sell B2C globally, move to an MoR platform. If you sell B2B, set up Stripe + Wise and validate VAT numbers.
3. **Open a multi-currency business account** this week. Wise Business takes about 20 minutes.
4. **Build an invoice template** with all required fields, including reverse-charge notes.
5. **Talk to a local accountant once.** A one-hour consultation about your specific cross-border situation costs less than a single misfiled VAT return. Ask specifically about permanent establishment risk and digital services VAT.
6. **Set up automated backups** of invoices and receipts to cloud storage with versioning enabled.

The goal isn't to become a tax expert — it's to build a system where compliance happens by default, so you can get back to shipping code.