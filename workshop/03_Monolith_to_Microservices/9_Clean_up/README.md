# Clean up of Module

Follow the following steps to clean up the OpenShift project and Dynatrace.

## Step 1: Delete Services and Pods on OpenShift
    ```
    oc delete all -l app=ticketmonster-monolith
    oc delete all -l app=ticketmonster-db
    oc delete all -l app=ticketmonster-ui-v1
    oc delete all -l app=ticketmonster-backend-v2
    oc delete all -l app=ticketmonster-orders-service
    oc delete all -l app=orders-db
    ```
    
## Step 2: Delete Management Zone and Custom Service Detection in Dynatrace


