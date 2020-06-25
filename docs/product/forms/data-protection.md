---
id: data-protection
title: Data protection
---

Both privacy and data protection are some of the highest priorities for us. We invest as much time as possible on securing the information and preventing access to non-authorized people.

## Data persistance

By default, all valid submissions sent by your users are stored into a database for future consultation. In case you do not want Arengu to store them because you receive sensitive information, you can flag the affected fields using the [Transient property](/product/forms/fields/#transient-property) and they will not be stored into the database.

This property is defined per field, so you can exclude the protected information (eg. passwords) while you continue storing the rest of the information for future processing (eg. user email or company name).

## Data access

Access to previously persisted submissions is authorized only to members of the associated workspace and its sole owner. Any non authorized attempt is monitored and analyzed by our data responsibles to take actions if a potential attack is detected.

Only our data responsibles are authorized to access our production databases in exceptional circumstances. Every scheduled backup, maintenance procedure or data migration is performed using automation tools that do not allow other employees to read stored information.

## Data deletion

When you request the deletion of a resource (eg. workspace, form or submission), it is logically deleted but still recoverable during the following 10 days to restore important information after an accidental deletion.

Once the scheduled date for physical deletion (15 days after the request) is reached, that data is permanently deleted and it will not be recoverable.

## Data security

All of Arengu’s code and procedures pass an exhaustive series of analysis and tests to detect any potential risk before those changes are deployed to the production environment.

Anyway, our security department is open to any feedback or incident reported to security[at]arengu[dot]com.
