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
    1. Commits/Pushes the new version to the Git repository.

## Step 2. Build new Release in Jenkins
1. Go to **Jenkins**, and **sockshop**
1. Click on **carts** pipeline and **Scan Multibranch Pipeline Now**.
1. Hit **F5** and you should see the new branch, which gets built and deployed to staging. 

# Troubleshooting
Some useful git commands:
- `git push origin --delete release/1.0.0`: delete the release branch 1.0.0
