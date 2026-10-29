---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-10-29T09:53:40.259Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You built a product people want. Then the first international customer tries to pay you, and suddenly you're staring at a wall of tax forms, currency conversions, and card declines. Cross-border payments are one of the few areas where a solo developer can get into real legal trouble without realizing it—not because you did anything malicious, but because compliance doesn't scale down to one person.

This guide covers the practical mechanics: how to accept money globally, what you're actually required to do, and where to draw the line between "handle it yourself" and "pay someone to handle it."

## Pick a Merchant of Record or Own the Compliance

The single biggest decision is whether to use a **Merchant of Record (MoR)** or a plain payment processor.

A processor like Stripe or Paddle's non-MoR mode makes *you* the seller of record. You're responsible for collecting and remitting sales tax/VAT/GST in every jurisdiction where you have tax nexus. For digital products sold to EU consumers, that means VAT registration and quarterly filings across potentially 27 countries—unless you use the One-Stop Shop (OSS) scheme, which still requires registration and reporting.

A **Merchant of Record** (Paddle, Lemon Squeezy, FastSpring) buys your product and resells it. They handle VAT, sales tax, invoicing, refunds, and chargebacks. You get a single payout. The trade-off is fees (typically 5% + payment costs) and less control over the checkout experience.

For a solo developer, the MoR is almost always the right call. The math: EU VAT compliance alone can cost $1,000+ per year in accounting and filings. If your international revenue is under six figures, a 5% fee is cheaper than the alternative.

```text
Processor (Stripe/PayPal):  ~3% fees + YOU handle tax globally
MoR (Paddle/Lemon Squeezy): ~5% fees + THEY handle tax globally
```

## Understand Your Tax Obligations Before You Scale

Two tax concepts trip up solo developers: **VAT/GST registration thresholds** and **US sales tax nexus**.

For EU/UK sales of digital services to consumers (B2C), the place-of-supply rule means you charge the *customer's* local VAT rate from the first euro—no threshold. This is why MoRs exist. If you sell B2B, the reverse-charge mechanism applies and the customer self-accounts for VAT, which is simpler but requires validating VAT numbers via VIES.

US sales tax is state-level. Post-*Wayfair*, economic nexus thresholds (often $100k or 200 transactions per state) trigger collection duties. Software-as-a-service taxability varies wildly by state. A MoR absorbs this headache; if you go direct, use a service like TaxJar or Avalara and budget for it.

The practical rule: **don't register for VAT/GST yourself unless you're doing meaningful volume in a single jurisdiction.** Use an MoR until the fees genuinely hurt, then hire an accountant who specializes in cross-border digital sales.

## Choose Payout Rails That Actually Reach You

Accepting payment is half the problem; getting the money into your bank account is the other. Your options:

- **Stripe/PayPal payouts** — Fast, but currency conversion spreads eat 1–3%. PayPal in particular is notorious for poor FX rates.
- **Wise Business** — Multi-currency accounts with mid-market rates. Great for holding USD/EUR/GBP and converting when favorable.
- **Local payment methods** — In many markets, cards are secondary. Offer iDEAL (Netherlands), SEPA (EU), Pix (Brazil), or UPI (India) via your processor. Stripe and Adyen support many of these natively.

Watch for **payout minimums and holds**. New accounts often face rolling reserves (5–10% held for 90+ days). Factor this into cash flow—a solo developer can't absorb a surprise 90-day hold on their first big month.

## Sanctions, KYC, and the Compliance You Can't Ignore

Even with an MoR, you remain responsible for **sanctions screening** and **know-your-customer** basics in some setups. Payment providers run KYC on you, and they'll freeze funds if your business looks like a shell or your customers cluster in sanctioned regions.

Practical steps:

1. **Keep your business entity clean.** Register a real company (LLC, Ltd, etc.), use a business bank account, and match names across processor, bank, and tax filings. Mismatches trigger manual reviews and delays.
2. **Screen for sanctioned countries.** The US OFAC list, EU sanctions, and UK OFSI list are non-negotiable. Most processors block these automatically, but if you sell via invoices or crypto, you're on the hook.
3. **Document your customers.** For B2B, retain VAT IDs and invoices. For high-value transactions, keep records. If a processor asks for proof during a review, having it ready prevents account freezes.
4. **Don't touch crypto payouts without advice.** Crypto introduces AML obligations and tax complexity that solo developers routinely underestimate.

## Next Steps

1. **Audit your current setup.** Are you a seller of record? If yes, list every country you've sold to and confirm your tax filings are current. If unsure, talk to an accountant this month.
2. **Move to a Merchant of Record** if international revenue is under ~$100k/year and you're handling tax manually. Migrate your checkout and update your terms of service.
3. **Open a Wise Business account** for multi-currency payouts and compare your effective FX cost against your current processor.
4. **Write a one-page compliance checklist** covering entity name matching, sanctions screening, invoice retention, and payout reserves. Review it quarterly.
5. **Set a revenue threshold** (e.g., $250k/year) at which you'll revisit going direct with a processor and hiring cross-border tax help.

Cross-border payments reward boring, documented decisions. The developers who get burned are the ones who optimize for fees and ignore compliance until a frozen account forces the issue.