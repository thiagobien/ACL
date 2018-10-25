# Check Prerequisites

1. Use your ssh client to connect to the bastion host and ensure the ```kubectl``` is configured for your GKE cluster.
    ```
    (local)$ ssh <username>@<bastion-ip>
    ```

    When asked, pelase provide the password and you should be connected to a terminal at the bastion host.

2. Check the `kubectl` configuration
    ```
    (bastion)$ kubectl config view
    ```

    The output should look similiar to the following image, where (1) should be the name of your cluster, and (2) is the generated access token.

    ![kubectl config view](../assets/kubectl-config-view.png)

    ```
    (bastion)$ kubectl get namespaces
    ```
    The output should look similiar to the following image.

    ![kubectl get namespaces](../assets/kubectl-get-namespaces.png)
