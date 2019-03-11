---
id: executions
title: Executions
---

Every time a flow is invoked, no matter the trigger, a new execution entry is created into our database to trace the process before, during and after the execution.

There are four important properties that define the beginning and the ending of an execution.

## Status

An execution is always associated to a status that indicates the state of that process at any moment. This is the list of possible values and the meaning of each of them:

* Pending: It has just been created but it has not been processed yet.
* Running: Our runner is executing the actions that compose the flow.
* Delayed: Execution is waiting to be processed because of a [Delay](/product/flows/actions#delay) action.
* Completed: Execution has been completed with no errors.
* Failed: An error has caused the execution to be aborted.

The statuses _Completed_ and _Failed_ are final ones, so once an execution reaches that status, it is considered processed and will not be executed nevermore.

## Input

It contains the data that, from different sources, has been provided to the execution following a structure similar to a standard HTTP request.

* Headers: Copy of all the headers received in the HTTP request that triggered the flow. For any other trigger, this map will be completely empty.
* Body: Object that includes the payload received on invocation. For HTTP triggers, it corresponds directly to the request body. For any other trigger, it will contain the fields filled in by user.

> We are already working to provide some metadata (eg. flow id or client ip) using an additional property.

## Output

It contains the data that has been returned on its execution to the requester following a structure similar to a standard HTTP response. This property is empty when the execution could not be completed.

* Status: Code that indicates the result of the execution. Synchronous flows returns a `200 OK` by default whereas asynchronous flows returns a `202 Accepted`. If the execution fails, a `500` code is set. Any other value between 200 and 499 can be set manually using the [Return response](/product/flows/actions#return-respose) action.
* Body: Payload defined by flow editor using [Return response](/product/flows/actions#return-respose) action to express success/failure or return information to requester. If it is not set, an empty object is returned by default.

> Headers object is not available on response yet, but it will be supported soon.

## Error

This property is set if, and only if, the execution was aborted due to a non recoverable error. Every successful execution will have this field completely empty.

The error object contains enough information to identify the action that caused the error and the problem that forced the execution to be aborted.

Further information about the complete execution can be analyzed through the [Debugging](/product/flows/debugging) feature.