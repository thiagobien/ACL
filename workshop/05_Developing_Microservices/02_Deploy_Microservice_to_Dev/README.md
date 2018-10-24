# Commit and Push a Change of a Microservice to master

In this lab you'll learn how to the Jenkins pipeline is designed to build, deploy, and test a microservice after pushing a change to its GitHub repository. 

**Deploy App to Dev**
* Maven (Go) build
    ```
    mvn -B clean package
    ```

* Docker build
    ```
    docker build -t ${env.TAG_DEV} .
    ```

* Docker push to registry
    ```
    docker push ${env.TAG_DEV}
    ```

* Deploy to dev namespace
    ```
    sed -i 's#image: .*#image: ${env.TAG_DEV}#' manifest/service.yml
    kubectl -n dev apply -f manifest/orders.yml
    ```

**Test App in Dev**
* Run health check in dev - Triggers an additional pipeline that executes the jMeter script: *basiccheck.jmx*.

* Run functional check in dev - Triggers an additional pipeline that executes the jMeter script: *service_load.jmx*.

## Step 1: Modify a Microservice

1. asdf

## Step 2. Build new Version in Jenkins

1. asdf
