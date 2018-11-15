# Simulate a Bad Production Deployment

In this lab you'll create a deployment of the front-end service that passes the quality gate in the staging pipeline and will get deployed to production. Besides, the entire traffic will be be routed to this new version using a prepared deployment pipeline. 

## Step 1: Remove a JavaScript error in the Front-end Service
1. Make sure you are in the master branch of your front-end.
    ```
    (local)$ git checkout master
    ```
1. In the directory of `front-end\`, open the file: `front-end\public\topbar.html`.
1. Remove the scripts in between `add dummy errors`  and `end dummy errors`.
    ```
    <div class="container">
        <!-- add dummy errors -->
        <!-- end dummy errors -->
    ...
    ```
1. Change the color of the top bar. 
1. Change version number from v2 to v1 in the link text in the top bar.
    ```
    </a> <a href="#">Buy 1000 socks, get a shoe for free - v1</a>
    ```

## Step 2: Create a new Release
1. Switch to the `front-end/` directory.
1. Run the following commands to create a new branch.
    ```
    (local)$ git checkout -b release/0.9.0
    (local)$ git push -u origin release/0.9.0 
    (local)$ git checkout master
    ```

## Step 3. Build the new Release in Jenkins
1. Go to **Jenkins** and **sockshop**.
1. Click on **front-end** pipeline and **Scan Multibranch Pipeline Now**.
1. Hit **F5** and you should see the new branch, which gets built and deployed to staging. 
1. (trigger build manually) Click on *release/0.9.0* and click on **Build Now**.

## Step 4: Deploy the new Front-End to Production
1. Go to your **Jenkins** and click on **k8s-deploy-production.update**.
1. Click on **master** and **Build with Parameters**:
    * SERVICE: *front-end*
    * VERSION: *v1*
1. Hit **Build** and wait until the pipeline shows: *Success*.

## Step 5: Run Job Template in the Ansible Tower
1. Go to Ansible Tower.
1. Start the job template **canary userX** to trigger a canary release of version 2 of the front-end service.

## Step 6: Adjust Sensitivity of Anomaly Detection
1. Go to **Applications** and click on **My web application**.
1. Click on the **...** button in the top right corner and select **Edit**.
1. Go to **Anomaly Detection** and enable the switch for *Detect increases in failure rate*.
    * Select `using fixed thresholds`
    * Alert if `2`% custom error rate threshold is exceeded during any 5-minute period.
    * Sensitivity: `High`
1. Go back to **My web application**.

## (optional) Route Traffic to the new Front-End Version
1. Go to your **Jenkins** and click on **k8s-deploy-production.canary**.
1. Click on **master** and **Build with Parameters**:
    * VERSION1: 0
    * VERSION2: 100
    * REMEDIATIONURL: *empty*
1. Hit **Build** and wait until the pipeline shows: *Success*.

---
[Previous Step: Setup Self Healing for Production](../03_Setup_Self_Healing_for_Production) :arrow_backward:

:arrow_up_small: [Back to overview](../)
