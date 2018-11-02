# Deploy Sockshop to Staging and validate Automation

Now as you have everything correctly setup and configured for the first environment (i.e., the *dev* environment), let's see how the automation works for the second environment (i.e., the *staging* environment) by following this lab. To deploy services to staging it is necessary to create a release branch first. Afterwards, the execution of the Jenkins pipeline automatically detects this release branch und deploys the service to staging.  

## Step 1: Deploy all services to Staging

1. Copy the file `create_release.sh` to the root directory of your Sockshop:
    ```
    .\sockshop
    .\sockshop\create_release.sh
    .\sockshop\carts
    .\sockshop\orders
    .\sockshop\payment
    .\sockshop\...
    ``` 

1. Release `carts` service to staging:
    1. Switch to the `carts/` directory.
    1. Run the `create_release.sh` script within the directory.
        ```
        (local)$ sh ..\create_release.sh
        ```

        The script does the following:
        1. Reads the current version of the microservice.
        1. Creates a release branch with the name release/**version**.
        1. Increments the current version by 1. 
        1. Commits/Pushes the new version to the Git repository.

1. Release `orders` service to staging as shown above.
1. Release `shipping` service to staging as shown above.
1. Release `queue-master` service to staging as shown above.
1. Release `front-end` service to staging as shown above.
1. Release `users` service to staging as shown above.
1. Release `payment` service to staging as shown above.
1. Release `catalogue` service to staging as shown above.

## Step 2. Build new Release in Jenkins
1. Go to **Jenkins** and **sockshop**.
1. Click on the pipeline for each service and **Scan Multibranch Pipeline Now**.
1. Hit **F5** and you should see the release branch, which gets built and deployed to staging. 

---

[Previous Step: Define Management Zones](../05_Define_Management_Zones) :arrow_backward: :arrow_forward: [Next Step: Setup Notification Integration](../07_Setup_Notification_Integration)

:arrow_up_small: [Back to overview](../)