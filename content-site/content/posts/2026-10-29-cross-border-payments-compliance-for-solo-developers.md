---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-10-29T15:01:38.994Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You built a product people want. Then the first international customer tries to pay you, and suddenly you're staring at a wall of taxes, currency conversion, and legal jargon that no tutorial prepared you for. Cross-border payments are one of the few areas where getting it wrong can cost you real money—or land you in regulatory trouble.

This guide covers the practical minimum you need to accept international payments as a solo developer or one-person company, without hiring a lawyer for every transaction.

## Start With the Right Payment Processor

Your choice of processor determines how much compliance work you inherit. Some providers act as the "merchant of record" (MoR), meaning they handle sales tax, VAT, and refunds on your behalf. Others are pure payment gateways, leaving you responsible for tax remittance.

For solo developers, MoR providers are usually worth the fee:

- **Paddle** and **Lemon Squeezy** handle VAT/GST globally, including the EU's complex rules.
- **Stripe** is flexible and developer-friendly but makes *you* the merchant of record—you own the tax obligations.
- **Gumroad** works for simple digital products but takes a larger cut.

If you sell SaaS or digital goods to consumers in the EU, MoR providers eliminate the need to register for VAT in 27 countries. That alone justifies the ~5% fee.

```js
// Stripe example: create a checkout session with automatic tax
const session = await stripe.checkout.sessions.create({
  line_items: [{ price: PRICE_ID, quantity: 1 }],
  mode: 'subscription',
  automatic_tax: { enabled: true },
  customer_update: { address: 'auto' },
  success_url: 'https://yourapp.com/success',
});
```

Note that `automatic_tax` requires you to configure tax registrations in the Stripe dashboard—it calculates, but doesn't remit.

## Understand Your Tax Obligations by Region

The three buckets that catch solo developers:

**VAT (EU/UK).** Digital services to consumers are taxed at the buyer's location, not yours. Thresholds vary, but once you cross them (often €10,000 for EU cross-border), you must collect and remit. MoR providers handle this; direct Stripe users must register via the One Stop Shop (OSS) or use a service like TaxJar.

**Sales tax (US).** Economic nexus rules mean you owe tax once you exceed state-specific thresholds—typically $100,000 in sales or 200 transactions. A handful of early customers rarely triggers this, but track it.

**GST (Australia, Canada, India).** Similar low thresholds for digital services. Canada's GST/HST registration kicks in at CAD $30,000.

Keep a simple spreadsheet mapping each country's threshold and your current revenue against it. Review quarterly. This is the single highest-value compliance habit you can build.

## Handle Currency and Fees Without Losing Margin

Cross-border payments leak money in three places: FX conversion, processor fees, and chargebacks.

- **Price in local currencies** where possible. Stripe and Paddle support multi-currency pricing; customers convert mentally and abandon less often.
- **Absorb FX or pass it on deliberately.** A 2–3% FX spread on top of a 3% processor fee eats a meaningful chunk of a $9/month subscription. Build it into your pricing.
- **Watch chargeback risk.** International cards have higher dispute rates. Use Stripe Radar or equivalent fraud rules, and require 3D Secure for high-risk regions.

```python
# Rough margin check before setting a price
def net_revenue(price_usd, fx_spread=0.025, processor_fee=0.029, fixed_fee=0.30):
    after_fx = price_usd * (1 - fx_spread)
    return after_fx * (1 - processor_fee) - fixed_fee

print(net_revenue(9.00))  # ~$8.19 before tax remittance
```

## Keep Records That Survive an Audit

You don't need a CFO, but you do need clean records. If a tax authority asks questions, "I used Paddle" is a valid answer—*if* you can produce the transaction reports.

- Export monthly transaction reports from your processor and store them (S3, a dated folder, anywhere durable).
- Keep customer location data—IP address and billing address at time of purchase. This is your evidence for tax jurisdiction.
- Separate business and personal banking. A dedicated business account (Wise, Mercury, or a local equivalent) simplifies everything.
- Register as a business entity in your jurisdiction. Accepting payments as an individual exposes you to personal liability.

If you use an MoR provider, download their tax invoices monthly. They are your proof of remittance.

## Next Steps

1. **Pick your processor this week.** If you sell digital goods to EU consumers and don't want VAT registration headaches, start with Paddle or Lemon Squeezy. Otherwise, configure Stripe with `automatic_tax`.
2. **Build a threshold tracker.** A spreadsheet with columns for country, threshold, current revenue, and status. Update it monthly.
3. **Set up a business bank account** and route all payments through it.
4. **Automate report exports.** A cron job or Zapier flow that dumps monthly transaction CSVs to cloud storage takes an hour to build and saves you later.
5. **Review pricing for FX margin.** Run the calculation above for your top three price points and adjust if needed.

Cross-border compliance isn't glamorous, but it's finite. Handle the three buckets—tax, currency, records—and you can sell globally from a one-person shop without surprises.