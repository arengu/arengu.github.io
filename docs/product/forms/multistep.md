---
id: multistep
title: Multi-step
---

Our forms support multiple steps to reduce user friction filling up the form progressively instead of requiring her to fill in tens of fieds without any feedback.

## Form navigation

When your forms have two or more steps, an additional back button is added automatically to every step of your form (except the first one because there is no previous step).

The text of both _Back_ and _Next_ buttons is customizable per step, so you can display a different text for each button of each step.

## Input validation

When someone completes a step and presses _Next_ button, the data of all the fields associated to that step is validated. Furthermore, if a validation flow is associated to that step, we send that information to the backend for its validation using the related flow.

See [Validations](/product/forms/validations/) section for more information about how we do it and the security involved on the process.

### Progressive checks

If your flow needs data that belongs to different steps, you do not have to ask user that information twice. Every time we execute a flow, we provide the information of the previous steps and the current ones.

This kind of behaviour is essential for two-factor verifications where you ask the phone number and, in the next step, the security code that she has received in his mobile phone.

## Data persistence

Despite we send the form data to flows for data validation, we do not store that information into the submissions database until the whole form is filled in and the _Submit_ button is pressed.

If you persist that information or provide it to third-party systems during validation, notifying the user about it is your completely responsibility.
