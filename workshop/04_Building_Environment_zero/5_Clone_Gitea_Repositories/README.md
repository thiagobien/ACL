# Clone Gitea Repositories

In this lab, you will clone the Gitea repositories we've forked in lab 2 to your local environment. Then, you can edit those files in Visual Studio Code or any other editor of your choice.

## Prerequisites
* Gitea organization
* Gitea user and password
* git installed on your local environment

## Steps - Linux/macOS
1. Download the `cloneall.sh` script that is in this folder to your local machine
1. Clone all projects from the Gitea organization you've created earlier to your local machine:

    ```
    ./cloneall.sh <GITEA IP ADDRESS>
    ```
## Steps - Windows
1. Download the `cloneall.ps1` script that is in this folder to your local machine
2. Launch PowerShell or Command Prompt

4. Execute commant to clone all repos from the Gitea organization you've created earlier to your local machine:

    ```
    PowerShell.exe -ExecutionPolicy Bypass -File .\cloneall.ps1 <GITEA IP ADDRESS>
    ```
    
    which will git clone these repos from your Gitea organization:
    
    ```
    carts
    catalogue
    front-end
    jenkins-release-branch
    k8s-deploy-staging
    k8s-deploy-production
    orders
    payment
    queue-master
    shipping
    sockshop-infrastructure 
    user
    ```

5. This concludes the lab

---

[Previous Step: Trigger Build Pipelines](../4_Trigger_Build_Pipelines) :arrow_backward:

:arrow_up_small: [Back to overview](../)
