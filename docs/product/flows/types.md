---
id: types
title: Types
---

This section describes the different types of flows you can create using our forms. Based on the type, the way we execute it or the actions you can add vary significantly.

## Synchronous flows

This kind of flow is very similar to a synchronous HTTP request: when a petition is received, we create a new execution and the response is not sent until the execution finisheses.

Every synchronous flow should include at least one [Return response](/product/flows/actions#return-respose) action to specify the payload and the status you want to return as result of the execution.

Furthermore, [Delay](/product/flows/actions#delay) action is completely forbidden because it would break the synchrony.

### Input validation

If you have to validate a step, a synchronous flow is the best option to do it because the form needs to wait for the response to know if the provided input is valid or not.

See [Form validation](/product/forms/validations#validation-flows) section for more information about how we interconnect forms and flows.

### Business rules

Sometimes, you have to share some business logic with other people but you do not have enough time to implement a cloud function or you do not want to deploy a web service for that.

When that happens, you can implement it creating a synchronous flow, enabling HTTP entrypoint and adding some Boolean condition and Send request actions.

## Asynchronous flows

This type is perfect when you have to process data and nothing has to wait for it. You can request multiple web services that needs a lot of time to be completed on background.

Any action is allowed in these flows except the [Return response](/product/flows/actions#return-respose) because, as these executions are queued, there is no way to return a response to the executor.

### Data processing

As soon as you capture leads and you use additional external systems, an asynchronous flow for processing submissions and integrating their information into your third-party systems is a must.

Using an asynchronous flow you can enrich, transform and export that information to as much systems as you have using our native integrations or your custom ones via [Send request](/product/flows/actions#send-request) actions.
