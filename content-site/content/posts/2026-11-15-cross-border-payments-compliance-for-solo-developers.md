---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-15T10:46:24.795Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
distributed: devto
---

# Cross-Border Payments & Compliance for Solo Developers

You've built something people want. Then the first international customer asks to pay, and you discover that "just add Stripe" is only the beginning. Cross-border payments for a one-person company mean juggling payment rails, tax registration thresholds, and KYC paperwork—usually without a finance team. Here's a practical map.

## Choose the Right Payment Rails

Your options fall into three buckets:

**Merchant of Record (MoR)** — Paddle, Lemon Squeezy, FastSpring. The MoR becomes the legal seller, handles sales tax/VAT registration and remittance, and pays you a single payout. Fees run 5–8% plus payout costs, but you skip tax registration in dozens of jurisdictions. For digital products sold globally, this is usually the right starting point for a solo dev.

**Payment processors** — Stripe, PayPal, Adyen. Lower fees (~2.9% + $0.30 domestic, higher for cross-border and currency conversion), but *you* are the merchant. You're responsible for tax registration, invoicing rules, and refund handling in every market. Stripe Tax can calculate and collect tax, but registration and filing are still on you (or your accountant).

**Local rails** — Pix in Brazil, UPI in India, iDEAL in the Netherlands, SEPA transfers in the EU. Great conversion rates locally, but each adds integration and reconciliation work. Only add these when a specific market justifies it.

A common hybrid: Stripe for your home market and major cards, an MoR for the long tail of countries where tax complexity outweighs the fee savings.

## Understand Tax Nexus Before You Scale

The trap for solo devs is **economic nexus**: many jurisdictions require you to register for VAT/GST once you cross a revenue or transaction threshold with customers there, even without a physical presence.

- **EU**: The OSS (One-Stop Shop) lets non-EU sellers register once and file a single return for all EU B2C sales. Thresholds vary by country (commonly €10,000 EU-wide for cross-border B2C).
- **UK**: £90,000 rolling 12-month threshold for VAT registration; digital services to consumers have their own rules.
- **US**: *South Dakota v. Wayfair* opened the door to state-level economic nexus. Thresholds are typically $100k in sales or 200 transactions per state—but vary widely. SaaS taxability differs by state.
- **Australia, Canada, Japan, and others**: each has its own GST registration threshold for remote sellers.

Practical rule: let an MoR absorb this until your volumes make the fees painful, then move to direct processing market by market as you cross thresholds. Keep monthly revenue-by-country reports from day one—you'll need them.

## KYC, Banking, and Getting Paid

As a solo founder, your personal and business identities are tightly coupled, which makes compliance friction worse.

- **Register a legal entity** (LLC, Ltd, or local equivalent) so you can open a business bank account and sign processor contracts cleanly.
- **Expect KYC**: processors will ask for incorporation documents, proof of address, beneficial ownership, and sometimes a description of your product and customer base. Answer fully and quickly—incomplete KYC is the top cause of frozen payouts.
- **Watch currency and payout costs**: receiving USD, EUR, and GBP into local accounts incurs FX spreads. Tools like Wise or multi-currency accounts at neobanks reduce this. Compare the *all-in* cost (processor fee + FX spread + payout fee), not just the headline percentage.
- **Have a backup rail**: a second processor or an MoR account protects you if one provider freezes funds during a review. Never rely on a single payout channel.

## Keep Records That Survive an Audit

You don't need enterprise tooling, but you do need defensible records:

- Store invoices with the correct tax treatment per customer country (B2B reverse-charge notes, VAT IDs, etc.).
- Reconcile processor payouts against your books monthly—fees, refunds, chargebacks, and FX differences all need line items.
- Keep evidence of tax registrations and filings. If you use an MoR, retain their invoices showing tax was collected.
- Automate where possible: Stripe Tax, Quaderno, or your accountant's portal can generate compliant invoices and reports. A spreadsheet plus monthly discipline beats a fancy stack you don't maintain.

## Next Steps

1. **Map your current customers by country** and estimate monthly revenue per market.
2. **Decide your rail strategy**: MoR for global reach, direct processor for your core market, local rails only when justified.
3. **Check nexus thresholds** for your top three markets and calendar the dates you'd cross them.
4. **Complete KYC proactively** and open a multi-currency account to cut FX costs.
5. **Set up a monthly reconciliation ritual**—one hour, every month, comparing payouts to invoices.
6. **Add a backup payment provider** before you need one.

Compliance isn't glamorous, but treating it as a lightweight monthly habit keeps you selling globally without surprises.