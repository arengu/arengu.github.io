---
id: payments
title: Payments
---

Our forms supports an advanced field that validates and processes payments automatically, so you do not have to implement that risky logic manually in your forms.

## Charges

Our Payment field supports two different types of charges. You have to choose one or another depending on the kind of product you sell in your website.

### One-off charge

Single payment that will not be repeated anymore unless the user buys again the product explictely. Typical charge when you offer early tickets for an event or you sell limited edition t-shirts.

**Supported by:** [Stripe](#stripe).

### Recurring charge

Fixed payment that will be repeated periodically until the user cancels the subscription. Most common charge of SaaS companies, newspapers publishers or any subscription business model.

**Supported by:** [Stripe](#stripe).

## Providers

We only support one provider at this moment, but we are already working with additional payment providers to offer you several similar alternatives.

### Stripe

[Stripe](https://stripe.com/) is one of the most important companies to receive payments and to generate invoices over the internet. They offer both a control panel and an API to manage or automate your operations.

Every time a payment is collected using Stripe, it generates an invoice associated to a customer. Furthermore, every operation is logged, so you can keep a full record of all the done operations.

**Supported charges:** [One-off](/product/forms/payments#one-off-charge) and [Recurring](/product/forms/payments#recurring-charge).

**Certified as:** [PCI Level 1 Service Provider](http://www.visa.com/splisting/searchGrsp.do?companyNameCriteria=stripe,%20inc)

## Security

Payments is an important activity for us, so we put a lot of effort to make it as safe as possible for both our customers and your users.

### Payment validation

Unlike other competitors, we do not allow anyone to submit a form without performing the required payments. The validation and collection of those payments is done on server side to bring you the maximum securiy.

This strategy does not allow attackers to manipulate the amount, steal your private API keys nor bypass the payment operation to receive the item you offer for free.

### Secure providers

All our providers are comply with the [Payment Card Industry Data Security Standards](https://www.pcisecuritystandards.org/security_standards); it means they satisfy the requirements specified by [PCI Security Standards Council](https://www.pcisecuritystandards.org/about_us/) for payment account security.

### Data leaks

As we indicate below, we do not receive, process nor store the credit card of your customers, so a potential leak of their card details is not possible at all.

When someone provides her credit card details, they are sent directly to your payment provider. They are who transforms that information into a non reversible securised token and without our servers intervention.

Once the token is generated, it is sent to our servers, where we request the payment without any detail of the credit card because that token does not allow us to get the card number nor its security code.

Furthermore, that temporal token is completely useless if someone tries to charge your customer because it is completely coupled to your account and cannot be used with a different one even if it is real.
