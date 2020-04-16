# Deploy Ansible Tower

In this lab we are going to deploy Ansible Tower, our chosen tool for automation, inside our cluster. Therefore, you will find a couple of files prepared in your home directory.

## Data needed
* Access bastion host

## Auto install or manual
In order to have this step go faster, an automatic installation option has been provided. This will take the information that was provided earlier and stored in the creds.json file and use that to install and configure Ansible Tower. For a more verbose experience, a manual installation option is also available.

* [Auto Installation](#auto-installation)
* [Manual Installation](./manual-installation.md)

## Auto Installation

1. To install Ansible Tower automatically, it suffices to execute the following on the bastion host
    ```
    (bastion)$ cd
    (bastion)$ ./installAnsible.sh
    ```
1. This script will not only create the necessary K8s resources, but it will also automatically import a self-service license and set up the configuration for Ansible Tower to trigger runbooks as outlined in the [Next Step: Setup Tower](../02_Setup_Tower)

1. You should see the default Dashboard of Ansible Tower:
![ansible tower dashboard](../assets/ansible-tower-initial.png)

---

:arrow_forward: [Next Step: Setup Dynatrace](../03_Setup_Dynatrace)

:arrow_up_small: [Back to overview](../)
