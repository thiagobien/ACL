# Pass and Extract Meta-Data for each deployed Process or Container

In this lab you learn which meta-data is captured automatically, how to pass custom meta data and how you can use this meta data to influence process group detection and automated tagging.

The OneAgent automatically captures a lot of meta data for each process which will be propagated to the Process Group Instance and the Process Group itself, e.g: Technology, JVM Version, Docker Image, Kubernetes pod names, service version number, etc. You can add additional meta data to every processes [via the environment variable DT_CUSTOM_PROP, DT_TAGS, ...](https://www.dynatrace.com/support/help/infrastructure/processes/how-do-i-define-my-own-process-group-metadata/)

## Step 1: Pass meta data via custom environment variables