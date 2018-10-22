# Create Microservice Release

In this lab you'll learn 

## Step 1: Create new Release

1. Switch to the `carts/` directory.

1. Run the `create_release.sh` script within the directory.
    ```
    sh create_release.sh
    ```

    The script does the following:
    1. Reads the current version of the microservice.
    1. Creates a release branch with the name release/**version**.
    1. Increments the current version by 1. 
    1. Pushes the new version to the Git repository.

## Step 2. Build new Release in Jenkins
