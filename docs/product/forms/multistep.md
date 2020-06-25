---
id: multistep
title: Multi-step
---

Our forms support multiple steps to reduce user friction filling up the form progressively, instead of requiring users to fill in tens of fields without any feedback.

## Form navigation

When your forms have two or more steps, an additional back button is added automatically to every step of your form (except the first one because there is no previous step).

The text of both _Back_ and _Next_ buttons is customizable per step, so you can display a different text for each button of each step.

## Input validation

When someone completes a step and presses the _Next_ button, the data of all the fields associated to that step is validated. Furthermore, if a validation flow is associated with that step, that information will be sent to the backend for its validation, by using the relevant flow.

See [Validations](/product/forms/validations/) section for more information about how this is done and the security involved in the process.

### Progressive checks

If your flow needs data that belongs to different steps, you do not have to ask the user for that information twice. Every time a flow is executed, the information from previous steps as well as the current ones is provided.

This kind of behaviour is essential for two-factor verifications – first, the user is asked for their phone number, and then the security code is in their mobile phone.

## Data persistence

Despite sending the form data to the flow for data validation, we do not store that information into the submissions database until the whole form is filled in and the _Submit_ button is pressed and the associated validation flows are passed.

If you persist that information or provide it to third-party systems during validation, notifying the user about it is your complete responsibility.
