# Configure Monitoring for keptn

In this lab you'll configure Dynatrace and Prometheus monitoring for keptn

## Step 1: Configure the Dynatrace Service for keptn

The OneAgent Operator has already been deployed in earlier stages of the lab. However, we still need to install the Dynatrace Service for keptn which will allow keptn to communicate with Dynatrace for sending events and comments to Problems

1. Execute the following command from your home directory to install the Dynatrace Service for keptn

    ```
    (bastion)$ cd
    (bastion)$ ./installDynatraceServiceForKeptn.sh
    ```
1. This script will perform the following steps:
    - Configure automated tagging rules in Dynatrace for environment, service and test-subject
    - Configure a problem notification in Dynatrace for sending events to the keptn api
    - Set up the Dynatrace Service in keptn
