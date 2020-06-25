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

Clearbit is a company that offers powerful APIs for data enrichment and lead generation.

#### Find company

This action returns information of the provided company based on the domain of its website. The returned data includes, for example, number of employees, location of its headquarters or tags about its activity.

#### Find person

It returns information of the employee and the company associated with the provided email address. This action does not work with personal emails. It includes the same information as [Find company](#find-company) action plus useful data related to the employee like role, location or her time zone.

### Email

This family groups a set of actions related to email addresses that are powered by our own services.

#### Verify email

It performs several checks against the provided email address in function of the rules that you have selected. The available rules are, for example, exclusion of disposable emails or addresses associated with free providers.

### Flow

This group includes several actions that modify the way we execute the actions of the flow.

#### Boolean condition

This action evaluates the specified conditions and continues the execution using one branch or another in function of the final result.

#### Delay process

It pauses the execution during a determined amount of time to resume it later in the same state. This action is not compatible with [Synchronous](/product/flows/types#synchronous-flows) flows.

#### Return response

It builds the response object based on the provided data and terminates the current execution. This action is not compatible with [Asynchronous](/product/flows/types#asynchronous-flows) flows because they cannot return anything to the requester.

### HTTP

Set of actions that let you to create your own integrations connecting your flows to external systems that are not available via native integrations.

#### Send request

Perform a HTTP request using any of the available methods and providing some data using a JSON object, form data or even a XML payload.

### HubSpot

These native operations let you to integrate your leads into one of the most popular CRMs after the data has been validated or even enriched.

#### Upsert contact

Creates a new contact or updates their information, when there is one contact associated with the provided email.

### JSON

Set of tools for parsing and serializing JSON objects.

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

### MailJet

French service for transactional emails and SMS delivery.

#### Send email

It sends a transactional email to the provided address. You can define its content directly in the flow or create a template in their platform and use our action to provide the values for the variables.

### SendGrid

Deliver your transactional and marketing emails through one of the most famous email delivery platforms.

#### Send email

This action sends the same email template to several recipients replacing the variables with different values for each person instead of calling the service once per address.

### Slack

It is one of the most popular tools for team communication and collaboration. One of the reasons for its popularity is its easy integrations with any external system.

#### Post message

It sends a rich message to the specified channel using a previously created webhook. It is one of our most flexible actions because it supports interaction through buttons.

### Telegram

Multiplatform application for instant messaging compatible with both smartphones and computers. You can create your own bot using our flows module.

#### Send Message

Send a message to the specified person using a bot that you have created using [BotFather](https://core.telegram.org/bots#6-botfather) — the bot for creating and managing custom bots.

### Twilio

Cloud communications platform for building SMS, voice and messaging applications.

#### Send SMS

Send a SMS to the referenced phone number using your acquired virtual phone number. It supports delivery to any country of the world in a very simple way.

### XML

Set of tools for parsing and serializing XML data.

#### Parse XML

Parses the provided XML string into a JSON object that can be referenced later. If the provided string is not valid, it throws an error.

#### Serialize to XML

Useful when you want to configure a [Send request](#send-request) action that consumes XML. Our native integrations that require XML serialize automatically to XML.

### Zapier

Service that allows you to integrate easily the data we capture with non natively supported platforms.

#### Trigger webhook

Send the specified data to Zapier platform, where they parse the data we send to integrate it into a platform that we do not support and is too complex to be implemented using our [Send request](#send-request) action.
