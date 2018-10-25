# Check Prerequisites

1. Use your ssh client to connect to the bastion host and ensure the ```kubectl``` is configured for your GKE cluster.
    ```
    **(bastion)$** kubectl config view
    ```

    The output should look similiar to the following image, where (1) should be the name of your cluster, and (2) is the generated access token.

    ![kubectl config view](assets/kubectl-config-view.png)