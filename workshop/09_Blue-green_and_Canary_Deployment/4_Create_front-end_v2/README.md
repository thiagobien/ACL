# Create front-end v2

In this lab, we create an improved version of the front-end service. We'll change the color of the header of the application to be able to see the effect of traffic routing between two different artefact versions.

## Data needed
(nil)

## Steps

1. We need the new version of the `front-end` service in the `staging` namespace, before we can start with a blue-green or canary deployment. Therefore, we use the release branch in the `front-end` repository that we've created earlier and make some changes in that branch.

    ```
    (bastion)$ pwd
    ~/repositories/front-end
    (bastion)$ git branch -a
    ... lists all branches from that repository ...
    (bastion)$ git checkout release/<release-branch-from-earlier>
    ```

1. Edit the file `public/topbar.html` in the release branch of the `front-end` repository and change the following lines as seen in the screenshot.

    ![change-topbar-html](../assets/change-topbar-html.png)

    Save the changes to that file.

1. Furthermore, bump the patch version in the `version` in the branch of the `front-end` repository, so that the build pipelines genereate a new artefact with a new verison that is stored in the Docker registry for further use.

    ```
    (bastion)$ pwd
    ~/repositories/front-end
    (bastion)$ vi version
    ... 
    ```

    ![bump-version](../assets/bump-version.png)

    Safe the changes to that file.

1. Now it's time to commit our changes, first locally, and the pushing it to the remote repository.

    ```
    (bastion)$ git add .
    (bastion)$ git commit -m "new more colorful version of front-end service"
    (bastion)$ git push
    ```

1. We trigger the build pipeline for the `front-end` service and if all goes well, we wait until the new artefacts is deployed to the `staging` namespace.

1. You can now see your changes in the `front-end` service that is deployed in `staging`. Get the public IP of the `front-end` load balancer in `staging` by listing all services in that namespace.

    ```
    (bastion)$ kubectl -n staging get services
    NAME           TYPE           CLUSTER-IP      EXTERNAL-IP    PORT(S)
    carts          ClusterIP      10.11.250.175   <none>         80/TCP
    catalogue      ClusterIP      10.11.254.135   <none>         80/TCP
    front-end      LoadBalancer   10.11.249.245   1.2.3.4        8080:31481/TCP
    orders         ClusterIP      10.11.251.11    <none>         80/TCP
    payment        ClusterIP      10.11.248.211   <none>         80/TCP
    queue-master   ClusterIP      10.11.242.139   <none>         80/TCP
    rabbitmq       ClusterIP      10.11.255.201   <none>         5672/TCP,9090/TCP
    shipping       ClusterIP      10.11.244.162   <none>         80/TCP
    user           ClusterIP      10.11.245.147   <none>         80/TCP
    user-db-svc    ClusterIP      10.11.243.25    <none>         27017/TCP
    ```

    Enter the public IP (e.g. 1.2.3.4) in your browser and you should see the awesome visual improvements we did.

    ![frontend-v2](../assets/frontend-v2.png)

---

[Previous Step: Deploy to Production](../3_Deploy_to_production) :arrow_backward: :arrow_forward: [Next Step: Deploy front-end v2](../5_Deploy_front-end_v2)

:arrow_up_small: [Back to overview](../)
