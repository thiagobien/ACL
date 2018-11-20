# Introduce a Failure into Front-End

In this lab lab you will introduce a Java Script error into front-end. This version will be deployed as version `v2`.

## Step 1: Introduce a JavaScript error in the Front-end Service
1. Make sure you are in the master branch of your front-end.
    ```
    (local)$ git checkout master
    ```

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
1. Change version number from v1 to v2 in the link text in the top bar.
    ```
    </a> <a href="#">Buy 1000 socks, get a shoe for free - v1</a>
    ```
1. Change the color of the top bar. 
    ```
    <div class="container" style="background-color: purple">
    ```
1. Open the file `front-end\version` and increase the version from `0.4.13` to `0.9.0`

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

## Step 4. Delete the Virtual Service for Sockshop
1. Make sure you are in the `\k8s-deploy-production\istio` folder on bastion.
1. Run the following command to delete the virtual service for sockshop. 
    ```
    (bastion)$ kubectl delete -f .\virtual_service.yml
    ```    

## Step 5: Deploy the new Front-End to Production
1. Go to your **Jenkins** and click on **k8s-deploy-production.update**.
1. Click on **master** and **Build with Parameters**:
    * SERVICE: *front-end*
    * VERSION: *v2*
1. Hit **Build** and wait until the pipeline shows: *Success*.

## Step 6. Apply the Virtual Service for Sockshop
1. Run the following command to create the virtual service for sockshop again. 
    ```
    (bastion)$ kubectl create -f .\virtual_service.yml
    ``` 

---
[Previous Step: Setup Self Healing](../03_Setup_Self_Healing_for_Production) :arrow_backward: :arrow_forward: [Next Step: Simulate Bad Production Build](../05_Simulate_a_Bad_Production_Deployment)

:arrow_up_small: [Back to overview](../)
