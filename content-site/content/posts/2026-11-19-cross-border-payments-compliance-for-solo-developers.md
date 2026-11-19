---
title: "Cross-Border Payments & Compliance for Solo Developers"
date: "2026-11-19T11:32:19.398Z"
draft: false
tags: ["solo-developer", "cross-border-payments", "indie-saas"]
distribute: true
---

# Cross-Border Payments & Compliance for Solo Developers

Selling software from a laptop in Lisbon to a customer in Osaka is technically trivial. Getting paid, staying legal, and keeping the tax authorities of three countries happy is where solo developers lose weekends. This guide covers the practical minimum: how to accept money, how to structure it, and which compliance obligations actually apply to a one-person company.

## Pick a Merchant of Record If You Hate Paperwork

The single biggest decision is whether you act as the **merchant of record (MoR)** or hand that role to someone else.

If you sell directly through Stripe or PayPal, *you* are the seller. That means you are responsible for sales tax, VAT, GST registration thresholds, refunds, chargebacks, and invoicing rules in every jurisdiction where you have customers. For a solo developer, this is a trap: the EU alone requires VAT registration once you cross €10,000 in cross-border B2C digital sales, and the UK, Norway, and Switzerland each have their own thresholds.

An MoR — Paddle, Lemon Squeezy, FastSpring, or Gumroad — buys your product wholesale and resells it to the end customer. They handle tax calculation, collection, remittance, and filing. You receive a single payout and an invoice from the MoR. The trade-off is a 5–10% cut plus less control over checkout UX and customer data. For most solo developers under ~$500k ARR, the MoR wins on total cost of ownership once you price in an accountant and your own time.

If you do go direct, use **Stripe Tax** (or a similar engine) from day one and register only where you exceed thresholds. Don't register everywhere preemptively.

## Get Your Legal Entity and Banking Right Early

Your personal bank account is not a business account, and mixing them creates an audit nightmare. Register a legal entity — an LLC in the US, a GmbH/UG in Germany, an OÜ in Estonia, or a local equivalent — and open a business account with a provider that handles multi-currency. Wise Business, Mercury, and Revolut Business are common for solo founders; traditional banks are slower but sometimes required for local tax filings.

Two practical rules:

1. **Keep the entity where you actually live and work.** Estonian e-Residency is popular, but if you're tax-resident in Spain, a Spanish entity is usually simpler and cheaper than explaining a foreign structure to your local tax office.
2. **Match your invoicing currency to your payout currency where possible.** Every FX conversion costs 0.5–2% and adds reconciliation work.

For receiving USD from US customers while based elsewhere, a USD account with a US routing number (Wise, Mercury) avoids wire fees and FX surprises. For accepting payments, Stripe supports 40+ countries directly; if yours isn't one, an MoR is your only realistic option.

## Know the Three Compliance Buckets That Actually Apply

You don't need a compliance department. You need to handle three things correctly.

**Tax.** Sales tax/VAT/GST on digital goods, plus income tax on your entity. The MoR solves the first; a local accountant solves the second. Budget €1,000–2,500/year for a bookkeeper who understands SaaS and cross-border revenue.

**Data protection.** If you have any EU or UK customers, GDPR applies regardless of where you're based. The minimum: a privacy policy, a lawful basis for processing (usually contract + legitimate interest), a data processing agreement with every vendor that touches customer data, and a documented deletion process. Use a DPA-friendly stack — Stripe, Paddle, and most auth providers publish standard DPAs you can sign in their dashboard.

**Sanctions and export controls.** This is the one solo developers ignore. If you sell to customers in sanctioned countries (Russia, Iran, North Korea, Syria, Cuba, and parts of Ukraine), you can be liable even if you didn't know. Payment processors screen automatically, but if you invoice directly or accept crypto, you need your own screening. A free-tier sanctions list check (OFAC SDN, EU consolidated list) run against new signups is cheap insurance.

## Price and Invoice Like a Professional

Invoices must include specific fields to be valid in most jurisdictions: your legal name and address, the customer's, a sequential invoice number, the date, a description of the service, the amount, the tax rate and amount, and your VAT/tax ID where applicable. Stripe and most MoRs generate compliant invoices automatically — don't hand-roll them in a spreadsheet.

Price in a stable currency (USD or EUR) and display local currency where your processor supports it. Avoid pricing in a currency you can't easily convert. And always state clearly whether prices include tax — "€49 incl. VAT" vs "€49 + VAT" changes your effective margin by 20% in the EU.

## Next Steps

1. **Decide MoR vs. direct** this week. If you're under ~$500k ARR and selling B2C globally, default to an MoR and move on.
2. **Register your entity and open a business account** with multi-currency support before your first invoice.
3. **Sign DPAs** with every vendor in your payment and analytics stack; keep them in one folder.
4. **Add a sanctions screening step** to your signup flow, even if it's a manual check for the first 100 customers.
5. **Hire a bookkeeper** who has at least one other SaaS client. Ask them specifically about cross-border digital sales tax before you sign.
6. **Write a one-page compliance note** for yourself listing your tax registrations, thresholds, and renewal dates. Review it every January.