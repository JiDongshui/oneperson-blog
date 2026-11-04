---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-04T10:50:41.707Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

You built something people want. Then the first international customer tries to pay you, and suddenly you're staring at a wall of acronyms: KYC, VAT, PCI-DSS, FATCA, and a dozen country-specific quirks. The good news: as a solo developer, you don't need to solve global payments from scratch. You need a small set of tools and rules that keep you compliant without becoming a part-time accountant.

This article covers the practical path: choosing a payment processor that handles the heavy lifting, understanding the tax and identity obligations that fall on *you*, and setting up a lightweight workflow you can actually maintain alone.

## 1. Pick a Merchant of Record (MoR) and Stop Worrying About Tax

The single biggest compliance win for a solo developer is using a **Merchant of Record**. With a plain payment gateway (Stripe, PayPal), *you* are the seller of record. You're responsible for calculating, collecting, and remitting sales tax and VAT in every jurisdiction where you sell. That's a nightmare across 40+ countries.

A Merchant of Record takes on that legal role. They calculate tax, collect it, remit it, and handle refunds and chargebacks. You get a single payout.

**Popular MoRs for digital products and SaaS:**
- **Paddle** – strong for SaaS and digital goods, handles VAT/GST globally.
- **Lemon Squeezy** – developer-friendly, good for indie software and licenses.
- **FastSpring** – established, more enterprise-leaning.

The trade-off is fees (typically 5% + a per-transaction fee) and less control over checkout UX. For a solo developer, that premium is usually cheaper than the hours you'd spend on tax compliance.

If you *do* want to use Stripe directly, use **Stripe Tax** to automate calculation, but remember you still own the remittance. Only go this route if you're selling into a small number of countries and are comfortable filing.

## 2. Know Your KYC and Identity Obligations

Every payment provider will demand proof of who you are and where your business lives. This is **Know Your Customer (KYC)** and **Anti-Money Laundering (AML)** compliance, and it's non-negotiable.

Prepare these before you sign up:
- **Government ID** (passport or national ID).
- **Proof of business address** (utility bill, bank statement, or incorporation document).
- **Business registration** if you operate as a company; sole proprietors may only need personal ID.
- **Bank account details** matching the business name where possible.

A few practical notes:
- **Mismatched names cause delays.** If your payout account says "John Smith" but your business is "Smith Labs LLC," expect a review request. Keep names consistent.
- **Sanctions screening is automatic.** If you or your customers are in restricted jurisdictions, payments will be blocked. Don't try to route around it.
- **Keep records.** Store KYC submissions and provider correspondence. Audits and account reviews happen.

For a one-person company, registering a simple LLC (US) or equivalent local entity often makes onboarding smoother than operating as an individual, because processors see a clear legal counterparty.

## 3. Handle Currency, Pricing, and Payouts Sanely

Cross-border money movement has friction beyond tax: FX spreads, payout timing, and currency display.

**Practical rules:**
- **Price in the customer's currency where it matters.** Displaying local currency (via your MoR or a currency API) reduces abandonment. Let the processor handle conversion.
- **Understand the FX spread.** Every conversion has a margin, often 1–3%. Build it into your pricing or accept it as a cost of business.
- **Watch payout thresholds and timing.** International payouts can take 3–10 business days and may have minimum thresholds. Don't rely on same-week cash flow.
- **Diversify payout rails.** A US-based bank account plus a service like Wise or Payoneer can reduce cost and delay for non-US founders receiving USD.

Avoid holding large balances in a single processor. If an account gets frozen for a compliance review (it happens), you want a second rail ready.

## 4. Build a Minimal Compliance Workflow

You don't need a compliance department. You need a repeatable checklist.

- **One source of truth for tax documents.** Keep a folder (or a tool like a password manager's secure notes) with your ID, business docs, and tax IDs.
- **Automate receipts and invoices.** Most MoRs generate compliant invoices automatically. Verify they include required fields (tax ID, VAT number, itemized tax) for your key markets.
- **Track economic nexus thresholds.** If you sell via Stripe into the US, states have revenue/transaction thresholds that trigger registration. A spreadsheet updated monthly is enough at solo scale.
- **Review provider terms quarterly.** Fees and supported countries change. A 15-minute quarterly check prevents surprises.
- **Separate business and personal finances.** This simplifies KYC, accounting, and any future audit.

## Next Steps

1. **Decide on your model:** MoR (recommended for most solo devs) vs. gateway + Stripe Tax. Write down the trade-off in one sentence.
2. **Gather KYC documents** into a single secure folder today, before you need them under deadline.
3. **Open a second payout rail** (e.g., Wise or Payoneer) so a single account freeze doesn't stall your income.
4. **Set a quarterly reminder** to review fees, supported countries, and nexus thresholds.
5. **Test a real international purchase** end-to-end from a foreign IP and card to confirm currency, tax, and invoice output look correct.

Compliance isn't glamorous, but a few hours of setup now saves weeks of firefighting later. Start with the MoR decision—it removes the largest chunk of cross-border complexity in one move.