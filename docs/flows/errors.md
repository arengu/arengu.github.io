---
id: errors
title: Errors
---

Even when you think you have perfectly defined your flow, external factors can cause your execution to fail. Knowing what kind of errors can happen and how to react is very important.

## Error handling

First of all, when an action fails, regardless of the cause, its execution inmediately stops. Next step, depending on the _Continue on error_ property varies significantly.

### Execution abort

The default behavior is abort the execution of the current action and propagate the error to the flow executor, that will retry or abort the execution in function of the error type.

The detected error will be logged as error of the affected action and of the aborted execution.

### Continue on error

If this flag is enabled, we log the error but we continue executing the next steps without propagating the error. Any variable referencing to the skipped action will not be resolved properly.

The detected error will be logged only as error of the affected action.

## Error inspection

Regardless of the action flags or the error type, any detected error is automatically attached to the logs of the affected execution for its later analysis.

You can check this logs if you access to the details of any recent flow execution using the control panel. See [Debugging](/docs/flows/debugging) section for more information.

## Error types

When a flow is being executed, there are several different types of errors that can happen and the reaction of our flow executor depends on it.

### Validation errors

Before any action is executed, we validate that the provided parameters (after variables resolution) satisfy the expected schema. In case any parameter is not valid, we throw an error message that aborts it execution.

When this kind of error is evaluated by our executor, the flow execution is aborted without retry because that error will not be fixed without modifying the parameters.

### Execution errors

Even when your parameters satisfy the expected schema, errors during execution time are possible due to expired credentials or deleted resources.

If our flow executor processes this error, it stops flow execution with no retry: the same non temporal error will happen again if we try to execute it in a few hours.

### Unexpected errors

Sometimes, despite your action is perfectly configured, requests to third-party systems fail due to temporal outages in external systems.

As this kind of errors can be easily solved retrying the request, flow executor pauses the execution to be resumed again in a few hours and retry again the action that had produced that error.

This retry strategy only applies to asynchronous flows because, when this errors happen on a synchronous flow, it will happen again if we retry the request inmediately.
