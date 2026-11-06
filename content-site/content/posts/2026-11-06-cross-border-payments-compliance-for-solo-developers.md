---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-06T10:48:11.443Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You built a product. Users sign up from Germany, Brazil, and Japan. Now you need to get paid—and that's where things get complicated fast. Cross-border payments involve currency conversion, tax collection, and regulatory requirements that vary by country. For a solo developer, the temptation is to ignore compliance until it becomes a problem. That's a mistake that can cost you more than the revenue you're chasing.

This article covers the practical decisions you need to make: which payment processor fits your situation, how to handle tax collection without a legal team, and where the real compliance risks hide.

## Choose the Right Payment Stack

Your first decision is whether to use a Merchant of Record (MoR) or a traditional payment processor.

**Merchant of Record (Paddle, Lemon Squeezy, Gumroad):** The MoR becomes the legal seller of your product. They handle sales tax, VAT, and GST collection and remittance in every jurisdiction. You receive a single payout. This is the fastest path for solo developers—you skip tax registration in dozens of countries, and the MoR absorbs the compliance burden. The tradeoff: fees run 5–10% plus fixed costs, and you have less control over the checkout experience.

**Payment processor (Stripe, PayPal):** You are the merchant of record. You collect payments directly, which means *you* are responsible for registering for VAT/GST and remitting taxes where required. Fees are lower (2.9% + $0.30 is typical), and you control the UX. But you own the compliance work.

For most solo developers selling digital products or SaaS internationally, an MoR is the pragmatic choice until revenue justifies the effort of self-managing taxes. If you already have an established entity with accounting support, Stripe gives you more margin.

## Handle Tax Collection Correctly

The single biggest compliance trap is indirect tax: EU VAT, UK VAT, and similar regimes in other countries.

**Key rules to understand:**

- **EU VAT:** Digital services sold to EU consumers are taxed at the customer's country rate, not yours. There's a €10,000 annual threshold for cross-border B2C sales; below it, you may charge your home country's rate. Above it, you must register for the One-Stop-Shop (OSS) scheme and charge destination rates.
- **B2B vs. B2C:** B2B sales within the EU typically use the reverse-charge mechanism—you don't charge VAT, but you must validate the customer's VAT number (the VIES service) and keep records.
- **US sales tax:** Economic nexus thresholds (often $100k in sales or 200 transactions per state) trigger collection obligations. SaaS taxability varies wildly by state.
- **UK:** Similar to EU—register for VAT if you exceed the threshold and sell to UK consumers.

If you use an MoR, they handle all of this. If you use Stripe, you can use **Stripe Tax** to calculate and collect the right amounts automatically, but you still must register and remit. Stripe Tax doesn't file returns for you.

The practical rule: don't sell to international consumers without either an MoR or a tax engine plus a plan for registration. Retroactive VAT assessments are painful.

## Manage Payouts, Currency, and Banking

Getting paid is only half the problem—getting money *into your bank account* is the other half.

- **Multi-currency:** Stripe and PayPal let you accept many currencies, but conversion to your home currency incurs FX spreads. Consider holding balances in major currencies and converting strategically.
- **Payout timing:** Cross-border payouts can take days. Plan cash flow accordingly.
- **Banking:** Many solo developers use services like Wise or Payoneer to receive payouts in multiple currencies at better rates than traditional banks. A local business bank account in your jurisdiction is still useful for tax filings and credibility.
- **W-8BEN:** If you're a non-US developer receiving payments from US platforms, you'll complete a W-8BEN to certify foreign status and avoid US withholding tax.

## Know Where the Real Risks Are

Compliance risks for solo developers cluster in a few areas:

1. **Tax registration creep:** You cross a threshold in a country and don't notice. Set up monitoring—Stripe Tax and MoR dashboards show this.
2. **Record-keeping:** Keep invoices, VAT validations, and payout records for the required period (often 5–10 years). Your payment processor's dashboard is not a permanent record.
3. **Sanctions and KYC:** Payment processors run KYC checks. Keep your business documentation current; frozen accounts are common when information is stale.
4. **Refund and chargeback handling:** Cross-border chargebacks are expensive. Clear refund policies and fraud screening (Stripe Radar) reduce exposure.

None of this requires a lawyer on retainer—but it does require you to treat compliance as part of the product, not an afterthought.

## Next Steps

1. **Decide your model:** MoR if you want zero tax admin and can accept higher fees; Stripe + Stripe Tax if you want margin and are willing to register and file.
2. **Audit your customer geography:** Check where your users actually are. If you're selling into the EU or UK, understand the VAT thresholds before your first sale.
3. **Set up a tax monitoring habit:** Review your sales by country monthly. Cross thresholds before they cross you.
4. **Open the right accounts:** A business bank account, plus Wise/Payoneer for multi-currency payouts, and complete any W-8BEN requirements.
5. **Document everything:** Invoices, VAT validations, and payout records—store them somewhere durable, not just in your processor's dashboard.

Start with the MoR route if you're unsure. You can always migrate to direct processing once revenue and volume make the compliance work worthwhile.