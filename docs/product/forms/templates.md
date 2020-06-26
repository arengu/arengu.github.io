---
id: templates
title: Templates
---

When creating a form, users can choose to start a form from scratch or use a form template. Arengu includes predefined templates with some of the most popular use cases, in order to save time and resources. Even when choosing a predefined template, it is possible to modify every detail of the form and its logic.

These are the available form templates.

## Blank form

This template includes a blank canvas so users can build the form completely from scratch.

## Registration form

This template includes a basic signup form with two fields: email and password. Plus, it authorizes
authentication, so users can access the site right after registering.

## SMS verification form

In order to implement a two-step authentication factor or to get a passwordless form with a one-time password,
users can select this template and modify the rest of the details.

This template contains a form with predefined fields organized into two steps: phone, country and verification code. The flows within this template include the generation of a one-time password, as well as its delivery via
SMS with Twilio as the SMS provider.

## Email verification form

This template displays an email field that is verified with a one-time password. On the logic side, it includes the generation of a one-time password, as well as its delivery via email, with SendGrid as the email delivery
provider.

## Login form

To create a form with a login system, choose the _Login Form_ template. It includes an email field and a password
field. This template allows users to automatically log in to a determined platform.

## Payment form

This template displays an email and payment field that processes the payment with Stripe. The integration with
Stripe allows automation of both one-off and recurring payments of fixed/dynamic charges.

## Newsletter sign-up form

This form template allows users to sign up to a newsletter of your own. It contains a form with an email field. Alongside, it contains two flows — an email verification action, and a newsletter subscription action. The _Email verification_ actions filters disposable email addresses and requires an MX record. Once the email is correctly
verified, the second action takes place, and users will be subscribed to a MailChimp newsletter.

## Lead qualification form

The Lead qualification form template presents three fields by default: name, email and comment section.

The flows linked to this form include an email verification action, so no unqualified or invalid leads will be received in your database. It also includes a second flow executed after the form’s submission. This flow scans the user’s email with Clearbit to enrich the leads database and it triggers automatic Slack notifications
according to the results gathered by Clearbit.
