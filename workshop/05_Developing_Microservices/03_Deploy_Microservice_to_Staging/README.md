# Release a Microservice to Staging Environment

In this lab you'll learn how to use the Jenkins pipeline to release a microservice to the staging environment. Therefore, the initial step is creating a relese branch based on the current version (e.g., *release/0.2.4*). Then the pipeline stored in the repository of a microservice (e.g., carts)  prepares the deployment and triggers another pipeline, which is stored in the *k8s-deploy-staging* repository. In fact, the *k8s-deploy-staging* repository reflects the current state of staging by keeping and maintaining the service and deployment specification of each microservice. 

**Prepare Deployment to Staging**
1. Mark artifact for staging namespace
    ```
    docker tag ${env.TAG_DEV} ${env.TAG_STAGING}
    docker push ${env.TAG_STAGING}
    ```

1. Deploy to staging - Triggers an additional pipeline that is responsible for deploying the new release to a staging environment. 

**Deployment App to Staging**
1. Update Deployment and Service specification - This step first sets the new version of the application in the deployment and service specification. Afterwards it pushes the update to the GitHub repository *k8s-deploy-staging*.

1. Deploy to staging namespace
    ```
    kubectl -n staging apply -f .
    ```

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
1. Go to **Jenkins** and **sockshop**.
1. Click on **carts** pipeline and **Scan Multibranch Pipeline Now**.
1. Hit **F5** and you should see the new branch, which gets built and deployed to staging. 

# Troubleshooting
Some useful git commands:
- `git push origin --delete release/1.0.0`: delete the release branch 1.0.0
