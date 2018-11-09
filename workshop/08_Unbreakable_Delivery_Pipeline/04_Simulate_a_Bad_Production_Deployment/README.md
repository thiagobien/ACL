# Simulate a Bad Production Deployment

In this lab you'll create a deployment of the front-end service that passes the quality gate in the staging pipeline and will get deployed to production. Besides, the entire traffic will be be routed to this new version using a prepared deployment pipeline. 

## Step 1: Introduce a JavaScript error in the Front-end Service
1. Open file `front-end\public\topbar.html` and add the following scripts to the `div class=container` element. 

    ```
    <div class="container">
        <!-- add dummy errors -->
        <script>
            var waitUntil = Date.now() + 3 * 1000;
            (function lazyWait (){
                while (Date.now () < waitUntil){
                }        
            })();
        </script>
        <script>
            messageBox.getCoolNewMessage ();
        </script>
        <!-- end dummy errors -->
    ...
    ```

## Step 2: Deploy the new Front-End to Staging
1. Switch to the `front-end/` directory.
1. Run the `create_release.sh` script within the directory.
1. Go to your **Jenkins**, and click on **sockshop** and **front-end**.
1. Click on **Scan Multibranch Pipeline Now** and select the **release/?** branch.
1. Click on **Build Now** to trigger the performance pipeline.
1. Wait until the pipeline shows: *Success*.

## Step 3: Deploy the new Front-End to Production
1. Go to your **Jenkins** and click on **k8s-deploy-production.update**.
1. Click on **master** and **Build with Parameters**:
    * SERVICE: *front-end*
    * VERSION: *v2*
1. Hit **Build** and wait until the pipeline shows: *Success*.

## Step 4: Run Job Template in the Ansible Tower
1. Go to Ansible Tower.
1. Start the job template **canary userX** to trigger a canary release of version 2 of the front-end service.

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