# Building environment zero

In this module you'll learn how to setup your environment in your own GKE cluster for the rest of the week for all labs. We'll setup [Jenkins](https://jenkins.io/) and a [Docker registry](https://docs.docker.com/registry/), fork several GitHub repositories from an existing GitHub organization ([dynatrace-sockshop](https://github.com/dynatrace-sockshop)) to yours, and configure build pipelines for all microservices in of the Sockshop application, that are hosted in said GitHub repositories. At the end of this session, your continuous CI/CD environment is ready to be explored, configured, and run.

# Checking prerequisites

1. Use your ssh client to connect to the bastion host and ensure the ```kubectl``` is configured for your GKE cluster.
    ```
    kubectl config view
    ```

    The output should look similiar to the following image, where (1) should be the name of your cluster, and (2) is the generated access token.

    ![kubectl config view](assets/kubectl-config-view.png)
