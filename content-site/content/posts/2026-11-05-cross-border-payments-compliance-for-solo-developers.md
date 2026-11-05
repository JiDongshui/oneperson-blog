---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-05T10:47:59.268Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You built something people want to pay for. Then the first international customer arrives, and suddenly you're dealing with currency conversion, tax rules, and payment providers that treat "one-person company" as a red flag. Here's how to handle cross-border payments and compliance without hiring a lawyer or an accountant.

## Pick a Payment Stack That Handles the Boring Parts

Your biggest risk as a solo developer isn't fraud—it's spending weeks on compliance plumbing instead of shipping. Choose providers that abstract away as much as possible.

**Merchant of Record (MoR) vs. Payment Processor** is the first decision. An MoR like Paddle or Lemon Squeezy becomes the legal seller of your product. They handle sales tax, VAT, and invoicing in dozens of jurisdictions. In exchange, they take a larger cut (typically 5%+ plus payment fees) and control the checkout experience. A processor like Stripe gives you lower fees and full control, but *you* are the seller of record—meaning *you* are responsible for tax registration and remittance everywhere you have customers.

For most solo developers selling digital products, an MoR is the pragmatic choice. The fee premium buys you something valuable: you don't need to register for VAT in the EU, collect GST in Australia, or track US state nexus thresholds. If you sell physical goods or need deep checkout customization, Stripe plus a tax service like TaxJar or Stripe Tax is viable—but budget real time for compliance.

Whichever path you choose, ensure the provider supports:
- Multi-currency pricing (or at least automatic conversion with clear fee disclosure)
- Strong Customer Authentication (SCA/3DS2) for EU cards
- Local payment methods where your customers are (iDEAL in the Netherlands, SEPA transfers in the EU, Alipay in China)

## Understand the Two Compliance Buckets: Tax and Identity

Cross-border compliance splits into two problems that people often conflate.

**Tax compliance** is about where you owe money and how much. The key concepts:
- **VAT/GST** applies to digital services in the EU, UK, Australia, and many other regions. With an MoR, this is their problem. Without one, you may need to register via the EU's One-Stop Shop (OSS) once you exceed thresholds.
- **US sales tax** is state-level. Economic nexus thresholds (often $100k in sales or 200 transactions) trigger registration obligations. Software-as-a-service taxability varies wildly by state.
- **Income tax** on your business profits depends on your entity's residence, not your customers' locations—but transfer pricing and permanent establishment rules can matter if you're a nomad.

**Identity and anti-money-laundering (AML) compliance** is about proving you're a legitimate business. Payment providers are legally required to run Know Your Customer (KYC) checks. Expect to provide:
- Government ID and proof of address
- Business registration documents (or sole proprietor equivalent)
- A clear description of what you sell and your expected transaction volume
- Sometimes, a website with terms of service and refund policy

Solo developers get flagged more often. A clean, professional website with clear pricing, contact information, and legal pages dramatically reduces friction. If your business is registered in a high-risk jurisdiction or you operate from a country with capital controls, expect longer onboarding and possible rejection—have a backup provider ready.

## Price in a Way That Survives Currency Swings

If you price in one currency (say, USD) and sell globally, you absorb FX risk and conversion fees. Two practical approaches:

1. **Local currency pricing with a buffer.** Display prices in EUR, GBP, and USD, but build a 3–5% margin into non-home currencies to cover conversion and provider fees. Update prices quarterly.
2. **Single currency, transparent conversion.** Price in USD only and let the processor convert. Simpler, but customers in other regions may balk at unfamiliar pricing and unexpected card fees.

Also account for **payment method costs**: cards cost 2.9%+ in many markets, while local methods like SEPA or iDEAL cost far less. Offering a low-cost local option can improve conversion and margins simultaneously.

Finally, understand **payout mechanics**. MoRs and processors pay out on schedules (weekly, monthly) and may hold reserves for new accounts. Plan cash flow around a 30–60 day lag between your first sale and money in your bank.

## Keep Clean Records From Day One

You don't need an accountant to start, but you do need records that an accountant can use later. Minimum viable bookkeeping:

- Export transaction reports monthly and store them (CSV is fine)
- Track gross revenue, provider fees, refunds, and FX gains/losses separately
- Keep invoices you receive (hosting, tools) for expense deductions
- Note the country of each customer if your provider reports it—useful if you ever cross tax thresholds

Use accounting software with multi-currency support (Wave for simple cases, Xero if you need more). Reconcile payouts against sales monthly; provider dashboards are not a substitute for your own ledger.

## Next Steps

1. **Decide MoR vs. processor** based on whether you want to own tax compliance. For most solo digital-product sellers, start with an MoR.
2. **Prepare your KYC packet** now: ID, business registration, a professional website with terms and refund policy.
3. **Set your pricing strategy** with a currency buffer and at least one low-cost local payment method.
4. **Open a separate business bank account** and connect it to your payment provider—never mix personal and business funds.
5. **Schedule a monthly 30-minute bookkeeping session** to export reports and reconcile payouts. Consistency beats sophistication.
6. **Revisit thresholds annually**: as revenue grows, your tax obligations change. A one-hour consultation with a cross-border tax advisor when you approach six figures is money well spent.