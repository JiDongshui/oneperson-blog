---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-10-29T15:03:26.325Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software, courses, or SaaS to customers outside your home country is one of the highest-leverage moves a solo developer can make. It also introduces a tax and payments surface area that most indie hackers underestimate. This guide covers the practical decisions: how to collect money, how to stay compliant, and where the sharp edges are.

## 1. Choose a Merchant of Record if you want to skip the hard parts

The single biggest compliance decision is whether you want to be a **merchant of record (MoR)** or use one.

As a merchant of record, *you* are the legal seller. You are responsible for collecting, remitting, and filing sales tax/VAT/GST in every jurisdiction where you have customers. For a solo dev selling to 30 countries, that is a full-time job you did not sign up for.

An MoR (Paddle, Lemon Squeezy, FastSpring, and similar) sits between you and the customer. They are the legal seller, they handle tax calculation and remittance globally, and they pay you a net settlement. The cost is typically 5–8% of revenue plus payment fees — higher than raw Stripe, but often cheaper than the accounting and legal time you'd otherwise burn.

**Rule of thumb:** if you're selling digital goods to consumers globally and revenue is under ~$500k/year, an MoR is almost always the right call. Use raw Stripe/PayPal only if you're selling B2B with a small number of well-understood jurisdictions.

## 2. Understand where tax nexus actually bites

If you go the direct route, you need to know where you owe tax. The two mechanisms that matter most:

- **VAT (EU/UK):** Since 2015/2021 reforms, non-EU sellers of digital services to EU consumers must charge VAT from the *first euro* of sales — there is no threshold for digital goods. The OSS (One-Stop Shop) scheme lets you register in one EU country and file a single quarterly return covering all member states. The UK has a separate £90k threshold for non-established sellers (check current rules).
- **US sales tax:** Post-*Wayfair*, states can require collection based on **economic nexus** — typically $100k in sales or 200 transactions per state. If you sell through an MoR, they handle this. If not, you register state-by-state as you cross thresholds.

The trap: people assume "I'm small, nobody cares." Tax authorities care about *nexus*, not revenue. A $50k/year product with a few thousand EU customers still requires VAT registration.

## 3. Pick a payout rail that doesn't eat your margin

Getting paid is a separate problem from collecting tax. Options:

- **Stripe/PayPal direct:** Good rates (2.9% + $0.30), but you're the merchant of record and handle compliance yourself.
- **MoR payouts:** Higher headline fee, but settlement is clean. Watch payout schedules — some hold funds for 30+ days.
- **Wise / Payoneer business accounts:** Useful for receiving multi-currency settlements and converting at near-mid-market rates. Avoid letting a platform auto-convert at 2–3% FX spreads if you can hold balances and convert deliberately.

Currency strategy matters more than people think: if you price in USD but your costs are in EUR, FX swings are a real P&L line item. Consider pricing in your customers' local currencies (MoRs handle this) and holding a small FX buffer.

## 4. Keep the paperwork you'll be asked for

Even with an MoR, you need a paper trail:

- **W-8BEN / W-8BEN-E:** US platforms (Stripe, Paddle, etc.) require this to confirm you're a non-US person and apply treaty withholding rates. Fill it out once and keep it current.
- **Invoices:** Most jurisdictions require sequentially numbered invoices with your business details, the customer's location, and the tax treatment. MoRs generate these; if you're direct, use a tool like Invoice Ninja or a Stripe invoicing setup.
- **Records:** Keep transaction logs for the statutory period (often 6–10 years depending on country). Export CSVs monthly; don't rely on a dashboard you might lose access to.

## 5. Register a real business entity early

Selling cross-border as a sole proprietor works until it doesn't. A limited company (Ltd, LLC, GmbH, etc.) gives you liability separation and makes it far easier to open business bank accounts, sign MoR contracts, and claim treaty benefits. The cost is modest (a few hundred dollars/euros) and it removes a category of "can I even do this?" friction with payment processors. Talk to a local accountant once — a one-hour consult on your specific setup is worth more than any blog post.

## Next Steps

1. **Decide MoR vs. direct** based on your customer mix and revenue. Default to MoR for consumer digital goods.
2. **Fill out your W-8BEN** with your payment platform today if you haven't already.
3. **Map your nexus:** list the countries/states where you have customers and check thresholds. If you're direct-selling into the EU, start the OSS registration.
4. **Open a multi-currency business account** (Wise/Payoneer) and stop letting platforms auto-convert.
5. **Book one accountant consult** focused on cross-border digital sales — bring your revenue-by-country numbers.
6. **Set a monthly export** of transaction records to your own storage.