# Commit and Push a Change of a Microservice to master

In this lab you'll learn how the Jenkins pipeline is designed to build, deploy, and test a microservice after pushing a source code change to the repository of a microservice. 

**Deploy App to Development Environment** - This step is broken down into four steps:   

1. Maven (Go) build
    ```
    mvn -B clean package
    ```

1. Docker build
    ```
    docker build -t ${env.TAG_DEV} .
    ```

1. Docker push to registry
    ```
    docker push ${env.TAG_DEV}
    ```

1. Deploy to dev namespace
    ```
    sed -i 's#image: .*#image: ${env.TAG_DEV}#' manifest/service.yml
    kubectl -n dev apply -f manifest/orders.yml
    ```

**Test App in Development Environment** - This step is conducted using two scenarios:   
1. (Sleep for some seconds.)
1. Run health check in dev - Triggers an additional pipeline that executes the jMeter script: *basiccheck.jmx*.
1. Run functional check in dev - Triggers an additional pipeline that executes the jMeter script: *service_load.jmx*.

## Step 1: Modify a Microservice

1. Switch to the `carts/` directory and open file `./carts/src/main/java/works/weave/socks/cart/controllers/HealthCheckController.java`. 
1. Activate the code sections that address the database connection test and save file.
1. Commit/Push the changes to your GitHub Repository *carts*.

## Step 2. Build new Version in Jenkins

1. Go to **Jenkins** and **sockshop**.
1. Click on **carts** pipeline and **Scan Multibranch Pipeline Now**.
1. Click on the **build** and open the **Console output** to follow the progress of the pipeline.
