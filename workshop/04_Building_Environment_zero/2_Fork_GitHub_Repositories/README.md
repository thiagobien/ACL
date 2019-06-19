# Fork GitHub Repositories

## Data needed
* Access to your bastion host
* GitHub user, email address and Personal Access Token
* A Github Organization to fork the repos to (created earlier)

## Steps

1. Connect to the bastion host ussing ssh and your credentials.

1. Configure your git user name and email address in the commandline on the bastion host.

    ```
    (bastion)$ git config --global user.name "<GitHubUser>"
    (bastion)$ git config --global user.email "<GitHubEmail>"
    ```

1. Execute the `~/forkGitHubRepositories.sh` script in your home directory. This script takes the name of the GitHub organization you have created earlier.

    ```
    (bastion)$ chmod +x forkGitHubRepositories.sh
    (bastion)$ ./forkGitHubRepositories.sh <GitHubOrg>
    ```

    This script `clone`s all needed repositories and the uses the `hub` command ([hub](https://hub.github.com/)) to fork those repositories to the passed GitHub organization. After that, the script deletes all repositories and `clone`s them again from the new URL.

1. Ensure that all repositories have been cloned in the `~/repositories' folder on the bastion host - we need them later.

    ```
    (bastion)$ ls -1 ~/repositories/
    carts
    catalogue
    front-end
    k8s-deploy-production
    k8s-deploy-staging
    orders
    payment
    queue-master
    shipping
    sockshop-infrastructure
    user
    ```

---

[Previous Step: Gathering Facts](../1_Gathering_Facts) :arrow_backward: :arrow_forward: [Next Step: Deploy Docker Registry](../3_Deploy_Docker_Registry)

:arrow_up_small: [Back to overview](../)
