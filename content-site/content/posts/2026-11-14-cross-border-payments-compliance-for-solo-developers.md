---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-14T10:17:06.999Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

Getting paid by international customers is one of the first real challenges a solo developer faces. The good news: you don't need a legal team or a payment ops department. The bad news: you can't ignore compliance entirely — and the penalties for doing so can be brutal. Here's a practical playbook for accepting cross-border payments without drowning in paperwork.

## Start With Your Entity and Tax Identity

Before you touch a payment processor, know what you're selling *as*. Most solo developers default to one of three structures:

- **Sole proprietor / individual:** Simplest, but you're personally liable and some processors won't onboard you for higher volumes.
- **Single-member LLC (or local equivalent):** Cheap to form, separates business and personal finances, and makes tax reporting cleaner.
- **Foreign-owned LLC with a US presence:** Popular for non-US developers selling to US customers, but it triggers US filing obligations (Form 5472, ITIN, etc.). Don't DIY this — a one-time accountant consult pays for itself.

You'll also need a tax ID (EIN in the US, VAT number in the EU, ABN in Australia, etc.). Payment processors ask for this during KYC, and withholding rules depend on it. **If you sell digital services to EU consumers, VAT registration is often mandatory regardless of where you live** — the EU's OSS scheme lets you file one return for all member states.

## Choose a Payment Stack That Handles Compliance for You

Your realistic options as a solo dev:

| Option | Best for | Compliance burden |
|---|---|---|
| **Stripe / Paddle / Lemon Squeezy** | SaaS, licenses, digital products | Low — they handle VAT/sales tax as merchant of record (Paddle, Lemon Squeezy) |
| **PayPal** | Broad reach, low setup friction | Medium — you're the merchant of record |
| **Wise / Payoneer** | Receiving B2B invoices | Low, but no checkout |
| **Direct bank transfer** | Large enterprise invoices | High — you handle everything |

The key distinction is **merchant of record (MoR)**. With Paddle or Lemon Squeezy, *they* are the seller of record: they collect and remit VAT/sales tax, handle refunds, and absorb most compliance risk. You get a smaller cut (typically 5% + fees vs. ~3% for Stripe), but you skip tax registration in dozens of jurisdictions. For a solo dev selling a $20/month SaaS globally, that trade is almost always worth it.

If you use Stripe, you're the merchant of record. That's fine — but you own the tax obligations. Use Stripe Tax to calculate and collect, and be honest about whether you're actually remitting.

## KYC, AML, and the Onboarding Reality

Every reputable processor runs Know Your Customer checks. Expect to provide:

- Government ID and proof of address
- Business registration documents
- A description of what you sell and where your customers are
- Sometimes: your website, terms of service, and refund policy

**Treat onboarding as a product requirement.** A clear pricing page, working refund policy, and contact information dramatically reduce the chance of a frozen account. Frozen funds are the single most common horror story for solo developers — and they usually stem from vague business descriptions or sudden volume spikes.

Practical mitigations:

- **Don't switch processors mid-launch.** Ramp volume gradually so fraud systems don't flag you.
- **Keep a reserve.** Assume one processor could hold funds for 90 days. Have 3–6 months of runway.
- **Use two processors** for redundancy once you have steady revenue (e.g., Stripe for cards, PayPal for regions where cards are weak).
- **Respond to KYC requests within 24 hours.** Slow responses extend holds.

## Sanctions, Restricted Countries, and Refund Policies

You are legally responsible for not selling to sanctioned entities. Most processors screen automatically, but you should understand the basics:

- **Block sanctioned jurisdictions** at signup (Russia, Iran, North Korea, Syria, Crimea, and others depending on your jurisdiction). Stripe and PayPal handle much of this, but not all.
- **Screen for export controls** if you sell anything remotely technical (crypto tooling, security software, dual-use APIs).
- **Write a refund policy and honor it.** Chargebacks are expensive ($15–25 each plus the lost sale), and a high chargeback rate gets you terminated. Clear policies and responsive support cut disputes dramatically.

Also mind **data protection**: if you have EU customers, GDPR applies to you regardless of your location. A privacy policy, a lawful basis for processing, and a data processing agreement with your processors are the minimum. Most processors provide DPAs — download and keep them.

## Next Steps

1. **Decide your entity and tax posture** — spend one hour with an accountant familiar with cross-border digital sales.
2. **Pick an MoR processor** (Paddle or Lemon Squeezy) if you want to skip VAT/sales tax registration; choose Stripe only if you're prepared to own tax remittance.
3. **Draft three documents**: terms of service, refund policy, and privacy policy. Templates are fine to start.
4. **Prepare your KYC packet** — ID, business docs, and a one-paragraph description of your product — before you apply.
5. **Set up a second payout method** (Wise or Payoneer) so a single frozen account doesn't stop your cash flow.
6. **Block sanctioned regions** at signup and keep a record of your screening process.

Compliance isn't glamorous, but it's cheap to do early and expensive to fix later. Get the basics right once, and you can focus on shipping.