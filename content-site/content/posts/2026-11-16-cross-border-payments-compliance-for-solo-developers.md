---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-16T11:06:49.955Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments for Solo Developers: A Practical Compliance Guide

Selling software internationally as a one-person company is easier than ever—until money crosses a border. Then you meet currency conversion, tax withholding, and a compliance stack designed for companies with a legal department. Here's a pragmatic setup that keeps you out of trouble without a CFO.

## Start With the Right Payment Rail

Your payment processor determines most of your compliance burden. Pick one that acts as **Merchant of Record (MoR)**—Paddle, Lemon Squeezy, or FastSpring—and they become the seller of record. They handle sales tax/VAT registration, remittance, and invoicing in dozens of jurisdictions. You invoice *them*, not the end customer.

The trade-off: MoRs charge 3–6% plus fees, and you lose some control over branding and refunds. If you go direct with Stripe or PayPal instead, **you** are on the hook for tax registration, and you'll likely need to register for VAT in the EU once you cross thresholds (often €10,000 in cross-border EU B2C sales) and collect US state sales tax where you have nexus. For most solo developers, the MoR premium is cheaper than the accounting hours.

Whichever you choose, keep the money flow clean:

- Receive payouts into a **business account**, never a personal one.
- Let the processor convert currency; don't stack FX fees by bouncing funds through multiple accounts.
- Document the processor's fee schedule—those 3–6% deductions are deductible business expenses.

## Know Where You're Tax-Resident (and Where You're Not)

Cross-border compliance starts with a single question: where does your company owe tax? If you operate as a sole proprietor in your home country, you generally pay personal income tax there on worldwide income—simple. If you've incorporated (LLC, Ltd, GmbH), you may create tax obligations in other countries simply by having a director, employee, or "permanent establishment" there.

Practical rules for solo founders:

1. **Don't create accidental permanent establishments.** Working remotely from a country for months can trigger corporate tax liability there. Check the double-tax treaty between your home and host country before you become a digital nomad.
2. **Watch withholding tax on B2B invoices.** Some clients must withhold a percentage of your payment (e.g., US clients withholding on payments to foreign contractors). A W-8BEN form reduces or eliminates US withholding under a treaty.
3. **Separate personal and business finances completely.** This is the single cheapest compliance habit—it makes audits, VAT filings, and bank questions trivial.

## Handle Currency and Bookkeeping Like a Business

Multi-currency bookkeeping trips up solo developers because they record revenue at the wrong rate. Pick one policy and stick to it: record each transaction at the exchange rate on the invoice date (most accounting tools do this automatically from your bank feed). Reconcile FX gains/losses at period end.

Use accounting software that speaks your processor's language—Xero, QuickBooks, or Wave all import Stripe/PayPal feeds. Then:

- Tag every payout against the underlying invoices so revenue and fees reconcile.
- Keep processor statements and payout reports for the statutory retention period (commonly 6–10 years, depending on jurisdiction).
- Store customer VAT IDs and tax residency data—MoRs collect this, but you should still archive what you can.

## Sanctions, KYC, and the Boring Stuff That Blocks Payouts

Payment processors run KYC/AML checks on *you*, and a mismatch between your registered address, bank account, and business documents is the #1 cause of frozen payouts. Keep these consistent everywhere:

- Legal business name and registration number
- Registered address (a virtual office is fine if it's your registered address)
- Beneficial ownership information (you)
- A clear description of what you sell

Also screen your customer base against sanctions lists at a basic level—most processors do this automatically, but if you sell direct, a denied-party check before onboarding enterprise customers protects you. And never accept payments from individuals in comprehensively sanctioned jurisdictions; the bank will reverse or freeze them and may close your account.

## Next Steps

1. **Decide your rail this week**: MoR (simplest) vs. direct processor (more margin, more compliance). Write down the tax obligations each creates.
2. **Open a dedicated business bank account** and route all processor payouts there.
3. **Confirm your tax residency and treaty position**, especially if you work across borders.
4. **Connect your processor to accounting software** and reconcile last month's payouts to prove the workflow.
5. **Audit your KYC documents** for name/address consistency before your next payout gets flagged.

None of this requires a lawyer for a typical solo software business—but it does require you to treat compliance as a product feature: boring, documented, and tested before it breaks.