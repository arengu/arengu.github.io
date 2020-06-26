---
id: actions
title: Actions
---

A flow is composed by a list of one or more actions that are executed sequentially. Each action has a specific goal that determines the input that it expects, its implementation and the output that it produces.

## Properties

Regardless of the type of action you have defined, every action has a group of common attributes:

* Identifier: It references univocally that specific action. Useful for variables replacement.
* Alias: Human explanation of the goal of that action. Optional.
* Type: It specifies the application our action integrates with.
* Action: Based on the action type, it indicates the operation that it performs.

Besides the previous fields, each action has a set of parameters that varies in function of the type.

## Available actions

This section describes all the available actions grouped by type. We add new actions regularly, so check this page occasionally to discover new actions.

### Clearbit

Clearbit offers data enrichment based on email scanning, by connecting to its API. Clearbit native actions in Arengu offer you information gathered by Clearbit in order to complement your submitters’ data. You can get all kinds of information about the company or the person by analyzing the domain or the email address.

**API setting:** To find your Clearbit API key, go to your Clearbit dashboard. Go to API keys and copy paste the private key.

#### Find company

This action returns information of the provided company based on the domain of its website. The returned data includes, for example, number of employees, location of its headquarters or tags about its activity.

#### Find person

It returns information of the employee and the company associated with the provided email address. This action does not work with personal emails. It includes the same information as [Find company](#find-company) action plus useful data related to the employee like role, location or her time zone.

### Email

This family groups a set of actions related to email addresses that are powered by our own services.

#### Verify email

It performs several checks against the provided email address in function of the rules that you have selected. The available rules are, for example, exclusion of disposable emails or addresses associated with free providers.

This action comes in handy to clean up your users database. You can use it to block certain email addresses and have a database with valid users. You can choose to block certain email addresses: select certain domains, block temporary emails, and block email aliases.

If you want to combine this action with _Input value mapping_ to translate the error messages, you will have to fill the _Mapping table_ with the following codes:

* `MISSING_MX_RECORD`: If you checked the box Require MX record.
* `FREE_EMAIL`: If you checked the box Block free email providers.
* `DISPOSABLE_EMAIL`: If you checked the box Block disposable email providers.
* `EMAIL_ALIAS`: If you checked the box Block email account aliases.

### Execution flow

This group includes several actions that modify the way we execute the actions of the flow and the sequence of steps that the user has to fill in.

#### Boolean condition

This action evaluates the specified conditions and continues the execution using one branch or another in function of the final result.

#### Delay process

It pauses the execution during a determined amount of time to resume it later in the same state. This action is not compatible with [Synchronous](/product/flows/types#synchronous-flows) flows.

For instance, you can send a welcome email after a user signs up, and add a certain delay so it is not sent immediately.

#### Go to the next step

In multi-step forms, this action continues form navigation to the upcoming step in a consecutive order.

#### Jump to a form step

In multi-step forms, this action skips following steps, to jump to a step of your choice, skipping the unnecessary steps in between.

#### Show error message

It builds a response object based on the provided data and terminates the current execution with a personalized error message.

#### Submit form

This final action executes the submission of the form and displays a personalized success message. When this action is executed, __any before-submission flow will not be executed__.

### HTTP

Set of actions that let you to create your own integrations connecting your flows to external systems that are not available via native integrations.

#### Send request

Perform a HTTP request using any of the available methods and providing some data using a JSON object, form data or even a XML payload.

### HubSpot

These native operations let you to integrate your leads into one of the most popular CRMs after the data has been validated or even enriched.

#### Create or update contact

Creates a new contact or updates their information, when there is one contact associated with the provided email.

**API setting:** To integrate Hubspot, you need to fill in the API key. To obtain it, go to your Hubspot account and click the settings icon. Click on _Integrations_ > _API key_. If you already have a key, click on _Show_. If not, click on _Generate API key_.

### JSON actions

Set of tools for parsing and serializing JSON objects. To create, parse or convert a JSON object, you can use any of these actions and save time and resources. These actions come in handy if you have developing skills and want to personalize your flows to the fullest.

#### Create object

It creates a new JSON object based on the provided data. It is very useful for building a new object and reusing it in several actions instead of building it several times.

#### Parse JSON

Parses the provided JSON string into a JSON object that can be referenced later. If the provided string is not valid, it throws an error.

#### Serialize to JSON

Useful when you use [Send request](#send-request) actions and you need a JSON string. Nevertheless, this serialization is not needed for native integrations because they already serialize the data when needed.

### MailChimp

Mailchimp is a marketing automation platform and an email marketing service. We offer some native actions for managing the audience of your newsletters.

#### Subscribe to list

It subscribes a new email address to the configured newsletter or updates their information if the provided email address is already subscribed to it.

**API setting:** To integrate MailChimp with Arengu, fill in these three mandatory fields: API key, Host and Audience ID.
* API key: Log in to your MailChimp account. Click on your profile icon, click on Account Panel > Account Settings > Extras menu > API keys.
* Host: To obtain the name of your host, go to your MailChimp account and find it in the URL of your admin space, as in this example: https://host.admin.mailchimp.com
* Audience ID: On your MailChimp account, go to the Audience tab. Click on _Contacts_ > _Settings_ > _Audience name and defaults_ > _Audience ID_.

### MailJet

French service for transactional emails and SMS delivery.

#### Send email

It sends a transactional email to the provided address. You can define its content directly in the flow or create a template in their platform and use our action to provide the values for the variables.

**API setting:** This action needs two API keys in order to integrate your Arengu form with MaiJet (_API key_ and _Secret key_). To obtain both keys, go to your MailJet account, and find them under _Account Information_ > _REST API_ > _Master API Key & Sub API key management_.

### SendGrid

Deliver your transactional and marketing emails through one of the most famous email delivery platforms.

#### Send email

This action sends the same email template to several recipients replacing the variables with different values for each person instead of calling the service once per address.

**API setting:** To use SendGrid as your email provider, you need SendGrid’s API key. Go to your SendGrid account and find it under _Settings_ > _API key_. Set up the access preferences, and you will be presented with the API key to copy paste it in Arengu.

### Slack

It is one of the most popular tools for team communication and collaboration. One of the reasons for its popularity is its easy integrations with any external system.

#### Send a Slack message

It sends a rich message to the specified channel using a previously created webhook. It is one of our most flexible actions because it supports interaction through buttons.

**API setting:** To connect to Slack, you will need to insert a webhook in the field Webhook URL. To obtain this data, follow these steps:
1. Create a Slack app:  Choose a name and a workspace linked to it.
1. Activate webhooks: After creating your app, go to settings and click on _Activate Incoming Webhooks_.
1. Create a webhook: Click on _Add New Webhook to Workspace_ and click on _Authorize_. You will now see a webhook, presenting this format: https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX

### Telegram

Multiplatform application for instant messaging compatible with both smartphones and computers. You can create your own bot using our flows module.

#### Send Message

Send a message to the specified person using a bot that you have created using [BotFather](https://core.telegram.org/bots#6-botfather) — the bot for creating and managing custom bots.

**API setting:** To connect your Arengu forms with Telegram, you need to fill in two mandatory fields: _Chat ID_ and _Token_. Besides, you will need to have a Telegram bot of your own. To create a bot or obtain the token, go to Telegram’s BotFather and write `/newbot` and `/token` commands, respectively.

### Twilio

Cloud communications platform for building SMS, voice and messaging applications.

#### Send SMS

Send a SMS to the referenced phone number using your acquired virtual phone number. It supports delivery to any country of the world in a very simple way.

**API setting:** In order to integrate Twilio, insert the two mandatory values: _Account ID_, and _Auth token_. You can find these data in your Twilio account. Go to the Twilio console, and find them under _Settings_ > _General_ > _API Credentials_.

### XML

Set of tools for parsing and serializing XML data.

#### Convert JSON to XML

Parses the provided XML string into a JSON object that can be referenced later. If the provided string is not valid, it throws an error.

#### Convert XML to JSON

Useful when you want to configure a [Send request](#send-request) action that consumes XML. Our native integrations that require XML serialize automatically to XML.

### Zapier

Service that allows you to integrate easily the data we capture with non natively supported platforms.

#### Trigger webhook

Send the specified data to Zapier platform, where they parse the data we send to integrate it into a platform that we do not support and is too complex to be implemented using our [Send request](#send-request) action.

**API setting:** To integrate Arengu with Zapier, go to your Zapier account and [select the webhook](https://zapier.com/help/create/code-webhooks/trigger-zaps-from-webhooks) you would like to use. Copy and paste the webhook in Arengu.
