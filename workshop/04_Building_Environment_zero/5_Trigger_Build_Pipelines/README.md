# Trigger Build Pipelines

In this lab, we'll prepare the `dev`, `staging`, and `production` namespaces in Kubernetes, so that the services find the infrastructure components that they need to work properly, i.e. the MongoDB for the user service, and a RabbitMQ. After that, we'll trigger all build pipelines to populate the `dev` namespace with all artefacts.

## Steps
1. Start the `user-db` service in all three namespaces.

    ```
    (bastion)$ kubectl create -f repositories/user-db/dev/
    (bastion)$ kubectl create -f repositories/user-db/staging/
    (bastion)$ kubectl create -f repositories/user-db/production/
    ```

    Verify the pods are running in each of the namespaces using the following command

    ```
    (bastion)$ kubectl get pods --all-namespaces | grep user-db
    ```

1. Start the `rabbitmq` service in all three namespaces.

    ```
    (bastion)$ kubectl create -f repositories/shipping-rabbitmq/dev/
    (bastion)$ kubectl create -f repositories/shipping-rabbitmq/staging/
    (bastion)$ kubectl create -f repositories/shipping-rabbitmq/production/
    ```

    Verify the pods are running in each of the namespaces using the following command

    ```
    (bastion)$ kubectl get pods --all-namespaces | grep rabbit
    ```

1. To warm up Jenkins and to populate the `dev` namespace in Kubernetes with artefacts from Sockshop, we now trigger all build pipelines in the Sockshop folder in Jenkins. To that end, we enter the Sockshop folder :one: in the Jenkins UI.

    ![](../assets/jenkins-ui-enter-sockshop-folder.png)

1. You see a list of build pipeline. **For all of the pipelines** please click the icons in the rightmost column of the table that shows all build pipelines in the Sockshop folder. By doing that, Jenkins looks for active branches of the configured GitHub project and builds the found branches accordingly.

    ![](../assets/jenkins-ui-trigger-pipeline.png)

1. This step is concluded, once all build pipelines have been run successfully.

---

[Previous Step: Deploy Jenkins](../4_Deploy_Jenkins) :arrow_backward: :arrow_forward: [Next Step: Clone GitHub Repositories](../6_Clone_GitHub_Repositories)

:arrow_up_small: [Back to overview](../)
