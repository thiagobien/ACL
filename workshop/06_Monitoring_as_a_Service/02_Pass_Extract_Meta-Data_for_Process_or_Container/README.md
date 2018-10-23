# Pass and Extract Meta-Data for each deployed Process or Container

In this lab you learn which meta-data is captured automatically, how to pass custom meta data and how you can use this meta data to influence process group detection and automated tagging.

The OneAgent automatically captures a lot of meta data for each process which will be propagated to the Process Group Instance and the Process Group itself, e.g: Technology, JVM Version, Docker Image, Kubernetes pod names, service version number, etc. You can add additional meta data to every processes [via the environment variable DT_CUSTOM_PROP, DT_TAGS, ...](https://www.dynatrace.com/support/help/infrastructure/processes/how-do-i-define-my-own-process-group-metadata/)

* *Which additional meta data should we pass?*
It depends on your environment but here are some ideas, e.g: Build Number, Version Number, Team Ownership, or Type of Service.

* *Using Meta Data (How and Use Cases):*
You can use custom and existing meta data from, e.g: Java Properties, Environment Variables, or Process Properties to influence [Process Group Detection](https://www.dynatrace.com/support/help/infrastructure/processes/can-i-customize-how-process-groups-are-detected/) as well as [Rule-based Tagging](https://www.dynatrace.com/news/blog/automated-rule-based-tagging-for-services/).

## Step 1: Pass Meta-data via Custom Environment Variables

1. TBD

## Step 2: Influence PGI Detection to detect each Build as separate PGI

1. TBD

## Step 3: Influence PGI Detection through Process Group Detection Rules

1. TBD