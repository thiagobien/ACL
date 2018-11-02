# Run Performance Test on Carts Service

In this lab you'll trigger a performance test for (1) the current implementation of carts service and (2) a new version of the carts service. The new version of the carts will intentionally contain a slow down of the service, which should be dedected by the performance validation.

## Step 1: Run Performance Test on current Implementation
1. Go to your **Jenkins** and click on **sockshop** folder.
1. Click on **carts.performance** and select the **master** branch.  
1. Click on **Build Now** to trigger the performance pipeline.

## Step 2: Introduce a slow down in Carts Service
1. In the directory of carts, open the file: `.\carts\src\main\resources\application.properties`.
1. Change the value of `delayInMillis` from `0` to `200`.
1. Commit/Push the changes to your GitHub Repository *carts*.

## Step 3: Build this new Version
1. Go to your **Jenkins** and click on **sockshop** folder.
1. Click on **carts** and select the **master** branch.
1. Click on **Build Now** to trigger the performance pipeline.
1. Wait for a *Success*.

## Step 4: Run Performance Test on new Version
1. Go to your **Jenkins** and click on **sockshop** folder.
1. Click on **carts.performance** and select the **master** branch.  
1. Click on **Build Now** to trigger the performance pipeline.

## Step 4: Explore Results in Jenkins
1. See Andi's deck slide #8

---

[Previous Step: Define Performance Pipeline](../04_Define_Performance_Pipeline) :arrow_backward: :arrow_forward: [Next Step: 06 Compare Tests in Dynatrace](../06_Compare_Tests_in_Dynatrace)

:arrow_up_small: [Back to overview](../)