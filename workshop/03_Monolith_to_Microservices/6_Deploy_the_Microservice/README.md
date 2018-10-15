# Deploy the Microservice

Based on the result of the previous labs, you identified the microservice **OrdersService** that has its own code repository and defines its own domain model. To launch this service, it is not recommended to directly route traffic to this new service since we cannot fully ensure that it works as supposed. For this reason, we strangle the microservice around the monolith. In other words, all incoming requests will still be intercepted by the backend service, which forwards synthetic or live traffic to **OrdersService**.

In this lab you'll use feature flags and OpenShift routing mechanism to smoothly incorporate the new microservice into the monolith. The final state of this lab is shown below:

![deploy_microservice](../assets/deploy_microservice.png)

## Step 1: Prepare the Microservice

1. Switch to the `orders-service/` directory.

1. Edit the database connection strings in `\src\main\resources\application-mysql.properties`:
    ```properties
    spring.datasource.legacyDS.url=jdbc:mysql://<your-ticketmonster-db>:3306/ticketmonster?useSSL=false
    spring.datasource.legacyDS.username=ticket
    spring.datasource.legacyDS.password=monster
    spring.datasource.legacyDS.driverClassName=com.mysql.jdbc.Driver

    spring.datasource.ordersDS.url=jdbc:mysql://<you-order-db>:3306/orders?useSSL=false
    spring.datasource.ordersDS.username=ticket
    spring.datasource.ordersDS.password=monster
    spring.datasource.ordersDS.driverClassName=com.mysql.jdbc.Driver
    ```

    You'll get this information with:
    ```
    oc get services
    ```

1. Build the application with Maven
    ```
    mvn clean install -P mysql,kubernetes fabric8:build -D docker.image.name=<yourdocker>/orders-service:latest -D skipTests
    ```

1. Build the Docker image in `\target\docker\<your dockerhub account>\orders-service\latest\build\`
    ```
    docker build . -t <your-docker>/orders-service:latest
    ``` 

1. Push the application to Dockerhub
    ```
    docker push <your-docker>/orders-service:latest
    ```

## Step 2: Deploy the Microservice

1. Create a new application in OpenShift
    ```
    oc new-app --docker-image=<yourdocker>/ticketmonster-orders-service:latest
    ```

1. Expose your microservice
    ```
    oc expose service orders-service
    ```

## Step 3. Deploy a new backend version for the microservice
1. Make sure to replace XX with your assigned workshop number
    ```
    oc new-app -e ORDERS_SERVICE_IP=orders-service-wsXX.18.207.174.41.xip.io --docker-image=dynatraceacm/ticketmonster-backend-v2:latest
    ```

1. Expose the Backend service.
    ```
    oc expose service backend-v2
    ```

1. We need to re-route the backend route to hit the new backend service
    ```
    oc set route-backends backend backend=0 backend-v2=100 
    ```

## Step 4: Switch feature flag and test your microservice

1. In your browser, navigate to your `ff4j` console: `https://<your-backend>-XX.<ip>/ff4j-console`. You will be able to switch on/off your new microservice from here. 

![ff4j_console](../assets/ff4j_console.png)

1. When making an order now the order will be operated and persisted by the **OrderService** instead of the monolithic booking service (in fact, the booking service calls the OrderService).

1. We can verify the service flow in Dynatrace.
    1. asdf
    1. bdfg
    1. TBD ....

