# Compare Builds in Dynatrace

In this lab you'll 

## Step 1: Open Dynatrace from Jenkins Pipeline
1. In the Performance Signature for a specfic build, click on **open in Dynatrace**. (This opens up the correct timeframe.)
1. Go to **Diagnostic tools** and click on **Top web requests**.
1. (optional) Filter on a Management Zone. 

## Step 2: Narrow down the result based on Requests Attributes
1. Click on **Add filter**.
1. Create filter for: `Request attribute` > `LTN`.
1. Click on **Apply**.

## Step 3. Open Comparison View
1. Select the Timeframe of a *good build*.
1. Click on *...* and select **Comparison** as shown below:
![compare_builds](../assets/compare_builds.png)
