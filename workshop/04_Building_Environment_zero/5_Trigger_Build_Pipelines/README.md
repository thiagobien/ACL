# Trigger Build Pipelines

## Steps
1. To warm up Jenkins and to populate the `dev` namespace in Kubernetes with artefacts from Sockshop, we now trigger all build pipelines in the Sockshop folder in Jenkins. To that end, we enter the Sockshop folder :one: in the Jenkins UI.

    ![](../assets/jenkins-ui-enter-sockshop-folder.png)

1. You see a list of build pipeline. **For all of the pipelines** please execute the following steps. Mouse-over the pipeline name and click on the small black arrow next to it :one: and click `Scan Multibranch Pipeline Now" in the menu :two:. By doing that, Jenkins looks for active branches of the configured GitHub project and builds the found branches accordingly.

    ![](../assets/jenkins-ui-trigger-pipeline.png)

1. This step is concluded, once all build pipelines have been run successfully.