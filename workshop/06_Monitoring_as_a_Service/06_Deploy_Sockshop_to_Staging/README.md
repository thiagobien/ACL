# Deploy Sockshop to Staging and validate Automation

Now as you have everything correctly setup and configured for our first environment (i.e., dev), lets do the same thing for a second enviornment by following this lab.

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
        sh ..\create_release.sh
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

