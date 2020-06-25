---
id: workspaces
title: Workspaces
---

A workspace is a set of one or more forms and flows grouped into the same context. Each workspace is a context completely isolated of the rest, so data cannot be shared between two different ones.

## Data isolation

Every operation performed by someone is restricted to their granted workspace, so no one can modify or access data of any workspace if they were not previously authorized by an authorized member.

Furthermore, this isolation prevents triggering flows that belong to other workspace, avoiding data leaks to workspaces that are created by external people or shared with a different group of users.

## Creating workspaces

Every user has an initial workspace when their account is created. This workspace is created automatically, and you can modify it anytime.

If you need more workspaces and [your billing plan](https://www.arengu.com/pricing) enables it, you can create as many additional workspaces as you need. If you want to share it with more people, continue reading.

## Sharing workspaces

You can share any of your workspaces with one or more users if they are already registered in Arengu. In case the email does not exist in our database, the request will be denied and no invitation will be sent.

Access to an existing workspace can be revoked anytime for any authorized member except the creator of the workspace, who will always have access to it.

## Merging workspaces

Two workspaces can be merged automatically if both of them were created by the same user. If you want to merge more than two, you will have to do it sequentially.

Merging workspaces that belong to different users is not allowed for security purposes, regardless if the user has access to both. Nevertheless, you can contact the support team and, after some checks, it may be authorized.

## Deleting workspaces

> Deletion is a destructive operation, so you should export your data before you continue.

If you no longer need an existing workspace, you can delete it via API or control panel and all its related data will be deleted too: forms, submissions, flows and executions.

Deletion operation takes effect immediately, but the affected data is kept in Arengu’s database for 15 days, to avoid accidental deletions. Your information can be recovered if you contact us in the first 10 days.
