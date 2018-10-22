# Instrument Kubernetes Cluster with Dynatrace Operator

In this lab you'll learn how to instrument a Kubernetes Cluster with Dynatrace.

## Step 1: Get Dynatrace API Token and PaaS Token
1. Set Dynatrace API Url
    ```
    export API_URL=<DT_API_URL>
    ```

1. Get/Set Dynatrace PaaS Token
    1. Login to Dynatrace.
    1. Choose the **Deploy Dynatrace** tab from the left menu.
    1. Click on **Set up PaaS integration** and **Generate new token**.
    1. Specify a name of the token (e.g. k8s_workshop) and click on **Generate**.
    1. **Copy** the token to the clipboard. 
    1. Finally, set the PaaS Token as environment variable:
        ```
        export PAAS_TOKEN=<DT_PaaS_Token>
        ```

1. Get/Set Dynatrace API Token
    1. Login to Dynatrace.
    1. Choose the **Settings** tab from the left menu.
    1. Click on **Integration** and **Dynatrace API**.
    1. Click on **Generate token**, specify a name of the token (e.g. k8s_operator) and click on **Generate**.
    1. Open the API Token and **Copy** the token to the clipboard. 
    1. Finally, set the API Token as environment variable:
        ```
        export API_TOKEN=<DT_API_Token>
        ```

## Step 2. Roll-out Dynatrace OneAgent Operator
1. Create Dynatrace Operator
    ```
    kubectl create -f https://raw.githubusercontent.com/Dynatrace/dynatrace-oneagent-operator/master/deploy/kubernetes.yaml
    ```

1. Define Kubernetes Secret to hold Dynatrace API and PaaS Token
    ```
    kubectl -n dynatrace create secret generic oneagent --from-literal="apiToken=${API_TOKEN}" --from-literal="paasToken=${PAAS_TOKEN}"
    ```

1. Create Custom Resource for Dynatrace OneAgent
    ```
    kubectl create -f oneagent.yml
    ```