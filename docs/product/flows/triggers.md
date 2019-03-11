---
id: triggers
title: Triggers
---

There are multiple ways to execute a flow but not all of them are available for all types of flows.

## HTTP request

When you enable this trigger, a public URL is generated based on its identifier. It is the most compatible way to execute a flow because any HTTP client can request it.

Any `POST` request sent to that URL will trigger a new flow execution whose input is mapped directly from the HTTP request using its headers and its body.

Furthermore, the parameters of the executed [Return response](/product/flows/actions#return-response) action will be mapped to the HTTP response, so you will be able to specify the status code and body you want to return.

If you enable this trigger in an asynchronous flow, as its execution is not done inmediately but queued, a default `202 Accepted` status code with no payload is returned to client.

**Compatible with:** [Synchronous](/product/flows/types#synchronous-flows) and [asynchronous](/product/flows/types#asynchronous-flows) flows.

## Step validation

When you configure a form step, you can set a synchronous flow as an input validator. Our SDK will validate the data provided in that step sending a request to the backend, that will trigger the execution of the flow.

This execution will include, as body, the data of all the filled in fields from the beginning to the step that is being validated plus the hidden fields that have been set automatically by the SDK.

Validation flows can return a success or failure using the [Return response](/product/flows/actions#return-response) and based on it, the SDK will allow user to continue or it will display an error message. That error message is mapped from a property of the flow response when you configure the validation.

See [Form validation](/product/forms/validations#validation-flows) section for more information about how we interconnect forms and flows.

**Compatible with:** [Synchronous](/product/flows/types#synchronous-flows) flows.

## Form submission

This trigger allows you to execute asynchronous flows that enrich and propagate the data provided by user to external systems. You can configure this trigger easily in form settings.

This execution will include, as body, the data that your user has provided plus the hidden fields that have been set automatically by the SDK.

As these executions are queued, custom responses are not allowed nor displayed anywhere.

**Compatible with:** [Asynchronous](/product/flows/types#asynchronous-flows) flows.
