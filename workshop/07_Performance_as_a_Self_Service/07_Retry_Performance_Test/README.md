# Run good Case

In this lab you'll 

## Step 1: Revert the fast Behaviour of Carts
1. In the directory of carts, open the file: `.\carts\src\main\resources\application.properties`.
1. Change the value of `delayInMillis` from `200` to `0`.
1. Commit/Push the changes to your GitHub Repository *carts*.

## Step 3: Build this new Version
1. Go to your **Jenkins** and click on **sockshop** folder.
1. Click on **carts** and select the **master** branch.
1. Click on **Build Now** to trigger the performance pipeline.
1. Wait for a *Success*.

## Step 3: Run Performance Test on new Version
1. Go to your **Jenkins** and click on **sockshop** folder.
1. Click on **carts.performance** and select the **master** branch.  
1. Click on **Build Now** to trigger the performance pipeline.

---

[Previous Step: Compare Tests in Dynatrace](../06_Compare_Tests_in_Dynatrace) :arrow_backward: 

:arrow_up_small: [Back to overview](../)