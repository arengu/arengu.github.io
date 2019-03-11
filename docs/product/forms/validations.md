---
id: validations
title: Validations
---

This section describes the two different kind of validations that we do every time we have to validate the data. The first one is mandatory while the second only applies if a validation flow is associated to a step.

## Form rules

This first validation checks that the provided data satisfies the basic rules defined for each field of the current form (see [Fields](/product/forms/fields/) section) and it is performed every time we have to send data to the backend.

As frontend validation does not guarantee its validity because requests can be manipulated, these rules are validated again on server side when request is received.

### Client side

As we have just mentioned, our SDK automatically verifies that the input your users have provided is valid every time we have to send data to backend. These validations are performed on browser without network dependency to reduce as much as possible the time we spent validating the input.

In case the user did not provide all the required fields or any field is not valid, a generic error message plus specific ones for each invalid field are displayed automatically. Nevertheless, if everything is ok, we continue the process sending the data to the backend.

When a field is not valid and user modifies its value, we inmediatey check if it is valid to remove the error message as soon as possible even if the user did not try to continue pressing the button.

### Server side

Despite the basic rules are validated locally, we validate the data again on our backend to make sure nobody tries to send invalid data manipulating the request nor the form rules has been modified at the same time that someone was modifying the form in the control panel.

The procedure when one or more errors are detected is the same than on client side: we display a generic error message plus specific ones for each invalid field.

## Validation flows

As soon as you collect leads or process sign-ups using our forms, you have to execute validations against external systems to detect existing accounts, verify emails or check promotional codes. All those validations can be done using our powerful [Flows](/product/flows/) module.

### Securing business

Unlike other competitors, your advanced validations are executed on server side, protecting your API keys, internal web services or third-party providers from potential attacks.

Imagine you do not allow people to request a limited gift without promotional code and that check depends on an authenticated external web service; if that validation is done on client side, any beginner hacker would be able to bypass the validation or use that API key for malicious actions.

Fortunately, you will not have that problem because we would validate your promotional code on server side.

### Custom messages

As you have to implement your own custom validations, you have to specify your custom error messages too. Our flows allow you to specify the result (success or failure) plus the error message you want to display.

Furthermore, you can refer user input or external error codes because our responses support text templates with variable replacement.

### Data signature

Your form can contain more than one validation flow and we do not want you to validate again all the previous data several times so, once the data is validated by your flow, we generate a temporary signature that confirms that all the data sent until that moment by your user is valid.

On following validations, SDK sends the form data plus the most recent signature, so we automatically check that the previous data was not manipulated and you only focus on validating the new data. If we detect that the previous data has been altered, we block the request displaying an error message.

This security mechanism is completely compatible with changes done by user going back to previous steps and going forward again because we would validate the previous step on server side and, after confirmation, we would validate the current step using the recent signature instead of the old one.

### Final submission

If your form contains at least one validation flow, we verify the signature at the end of the process to make sure that the sent data was not modified and that all the required validations were done. This process applies even if the last step does not have any validation flow.

If one or more validations were skipped, backend will return an error message saying there are pending ones, so you do not have to verify that previous flows were executed neither.