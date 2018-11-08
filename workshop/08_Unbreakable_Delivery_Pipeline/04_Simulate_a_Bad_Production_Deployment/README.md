# Simulate a Bad Production Deployment

In this lab you'll 

## Step 1: Introduce a slowdown in the Front-end Service
1. Open file `front-end\public\topbar.html` and add the following scripts to within the `div class=container`. 

    ```
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
    ```

## Step 2: Release this new Version
1. 
1. 
1. Go to your **Jenkins** and click on **sockshop** folder.
1. Click on **front-end** and select the **release/?** branch.
1. Click on **Build Now** to trigger the performance pipeline.
1. Wait until the pipeline shows: *Success*.

## Step 3: Deploy the new Front-End to Production
1. Go to your **Jenkins** and click on **k8s-deploy-production.update**.
1. Click on **master** and **Build with Parameters**:
    * SERVICE: *front-end*
    * VERSION: *v2*
1. Hit **Build** and wait until the pipeline shows: *Success*.

## Step 4: Route Traffic to the new Front-End Version
1. Go to your **Jenkins** and click on **k8s-deploy-production.canary**.
1. Click on **master** and **Build with Parameters**:
    * VERSION1: 0
    * VERSION2: 100
1. Hit **Build** and wait until the pipeline shows: *Success*.
