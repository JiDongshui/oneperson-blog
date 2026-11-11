---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-11T10:50:18.151Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You built a product. A customer in Germany wants to pay you, you're in Brazil, and your Stripe account is tied to a local entity that can't accept EUR. Welcome to the unglamorous side of indie software: getting paid across borders without triggering a compliance headache.

This guide covers the practical stack — payment processors, tax handling, and the minimum compliance you actually need to worry about as a one-person company.

## Start With a Merchant of Record

The single biggest decision is whether to be a **merchant of record (MoR)** or use one. As an MoR, *you* are legally the seller: you handle sales tax, VAT, refunds, and chargebacks in every jurisdiction. As a solo dev, that's a full-time job you don't want.

A payment facilitator like **Paddle** or **Lemon Squeezy** acts as the MoR. They sell on your behalf, collect and remit VAT/GST/sales tax globally, and pay you a net payout. You trade ~5% + fees for not registering for VAT in 30 countries.

If you use **Stripe** directly, you're the MoR. Stripe Tax can *calculate* tax, but you're still responsible for *registering and remitting* it. That's fine for a US-only SaaS; it's a trap for global sales.

**Rule of thumb:** if you sell digital goods to consumers worldwide and you're a team of one, use an MoR. Reserve direct Stripe for B2B invoices where the customer handles their own tax.

## Getting Money Into Your Account

Once you've chosen a processor, you need a way to receive payouts. Options, roughly in order of friction:

- **Local entity + local bank** — cleanest, but expensive to set up and maintain.
- **Wise Business / Payoneer** — multi-currency accounts with local receiving details (IBAN, ACH, etc.). Good for freelancers and small companies. Watch the FX spread, not just the headline fee.
- **Stripe Atlas / similar** — spin up a US LLC to access US payment rails. Popular but adds US filing obligations (Form 5472, annual reports) that cost more than the LLC itself if you hire an accountant.

Don't ignore **FX costs**. A 2% conversion spread on $10k/month is $2,400/year — often more than your processor fees. Compare the *all-in* rate: processor fee + payout fee + FX spread.

For payouts, batch them. Most processors charge a fixed fee per payout, so monthly beats weekly.

## Tax: What You Actually Owe

Two separate taxes trip people up:

1. **Indirect tax (VAT/GST/sales tax)** — charged to the customer, remitted to the government. An MoR handles this. If you go direct, you must register once you cross thresholds (e.g., EU OSS at €10k, UK at £90k, various US state economic nexus rules).
2. **Income tax** — on your profit, in your country of residence. This is unavoidable and requires local advice.

The EU's **OSS (One-Stop Shop)** lets you register once and file a single return for all EU B2C sales — but only if you're established in the EU. Non-EU sellers often still need an intermediary or MoR.

Keep clean records from day one: a spreadsheet mapping each payout to invoices, currencies, and fees is enough at small scale. Your accountant will thank you, and audits get far less scary.

## Compliance Basics You Can't Skip

You don't need a compliance department, but a few things are non-negotiable:

- **Terms of Service & Privacy Policy** — required by processors and by law (GDPR if you touch EU users). Generate a baseline, then have a lawyer review once.
- **Refund policy** — EU consumers have a 14-day withdrawal right for digital goods *unless* they explicitly waive it at purchase. Your checkout must handle this.
- **KYC** — processors will ask for ID, proof of address, and business registration. Have these ready before you launch; a stalled KYC blocks payouts.
- **Sanctions screening** — processors handle this, but if you sell B2B, know your customer's jurisdiction. Don't onboard obvious red flags.

If you're a solo dev, the honest minimum is: MoR for tax, Wise/Payoneer for payouts, a reviewed ToS/privacy pair, and a bookkeeping routine. Everything beyond that is optimization.

## Next Steps

1. **Decide MoR vs. direct.** If you sell B2C digital goods globally, sign up for Paddle or Lemon Squeezy this week.
2. **Open a multi-currency account** (Wise Business is a solid default) and compare all-in FX costs against your bank.
3. **Draft your legal pages** — ToS, privacy, refund policy — and get a one-hour lawyer review.
4. **Set up bookkeeping** before your first payout: one spreadsheet, one folder for invoices, monthly reconciliation.
5. **Batch payouts monthly** and track the FX spread on each one; revisit quarterly.

Cross-border payments aren't glamorous, but a weekend of setup saves months of tax paperwork later. Get the MoR and payout rails right, and you can spend the rest of your time shipping.