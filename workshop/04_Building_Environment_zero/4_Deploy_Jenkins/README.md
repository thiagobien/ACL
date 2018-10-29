# Deploy Jenkins

## Overview

**NEEDS UPDATE !!!**

![Lab Setup Step 3](../assets/lab-setup-3.png)

## Data needed
* GitHub organization
* GitHub user email address
* Docker Registry IP address (from previous step)

## Steps
1. Jenkins will be the CI/CD pipeline tool of choice for this workshop. We'll deploy Jenkins as a Kubernetes service and use persistent volumes for the workspace and jobs directory, so that these data is persisted, if the pod is restarted. Jenkins will subsequentially start a pod for each build that is triggered. To save bandwidth, we create one more persistent volume that acts as a maven cache volume and is mounted automatically in each pod that runs a maven build.

1. Create Jenkins PVCs

    ```
    (bastion)$ kubectl create -f manifests/k8s-jenkins-pvcs.yml
    ```

    Expected output:

    ![](../assets/kubectl-create-jenkinspvcs.png)


---

[Previous Step: Deploy Docker Registry](../3_Deploy_Docker_Registry) :arrow_backward: :arrow_forward: [Next Step: Trigger Build Pipeline](../5_Trigger_Build_Pipelines)

:arrow_up_small: [Back to overview](../)