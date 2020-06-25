---
id: types
title: Types
---

This section describes the different types of flows you can create by using our forms. Based on its type, the way it is executed or the actions added, the flows can vary significantly.

## Synchronous flows

This kind of flow is very similar to a synchronous HTTP request: when a petition is received, a new execution is created and the response is not sent until the execution finished.

Every synchronous flow should include at least one [Return response](/product/flows/actions#return-respose) action to specify the payload and the status you want to return as result of the execution.

Furthermore, [Delay](/product/flows/actions#delay) action is completely forbidden because it would break the synchrony.

### Input validation

If you have to validate a step, a synchronous flow is the best option to do it because the form needs to wait for the response to know if the provided input is valid or not.

See [Form validation](/product/forms/validations#validation-flows) section for more information about how we interconnect forms and flows.

### Business rules

Sometimes, you have to share some business logic with other people, but you do not have enough time to implement a cloud function, or you do not want to deploy a web service for that purpose.

When that happens, you can implement it creating a synchronous flow, enabling HTTP entrypoint and adding some boolean condition and send request actions.

## Asynchronous flows

This is the ideal type of flow when the data does not need to wait to be processed. You can request multiple web services that need a lot of time to be completed in the background.

Any action is allowed in these flows except the [Return response](/product/flows/actions#return-respose) because, as these executions are queued, there is no way to return a response to the executor.

### Data processing

As soon as you capture leads and you use additional external systems, an asynchronous flow for processing submissions and integrating their information into your third-party systems is a must.

By using an asynchronous flow you can enrich, transform and export that information to as many systems as you have, by using Arengu’s native integrations or your custom ones via [Send request](/product/flows/actions#send-request) actions.
