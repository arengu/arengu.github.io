---
id: submissions
title: Submissions
---

When someone fills in the form and the provided data satisfies all the defined validations, a new submission is automatically persisted into our database.

## Sensitive data

If your forms contain sensitive information that you do not want us to store, you can use the [Transient property]() to secure it. See [Data protection](docs/forms/data-protection#data-persistance) section for more information.

## Mail notifications

You can configure the list of recipients (maximum of 10 addresses) that will receive an automatic email when someone submits the form successfully.

This email is a predefined template sent by our system that cannot be modified. If you want to send a custom message, you will have to create a flow and use your favourite email provider.

## Data export

If you want to export the leads that you have captured, you have two different options for it.

### Bulk export

This is the simplest way because it does not require you to configure anything and it allows you to export all the received submissions since the creation of the form.

When you export the data, you have to choose which kind of file format you want:

* CSV: Compatible with _Microsoft Excel_, _LibreOffice Calc_, _Google Spreadsheet_ or any other CSV parser. Best format for non technical people that process the leads manually.
* JSON: Alternative format when you have to process the submissions. This format requires a developer capable of implement and maintain a script to process them.

### Asynchronous flow

This is the most powerful way to export your data because it allows you to enrich, transform and propagate your data to as much external platforms as needed.

Furthermore that business logic runs on our infrastructure, so you do not have to implement nor deploy aything on your company servers or applications.

See [Flows](/docs/flows/) section for more information about its execution or fault tolerance.