# The Microservice and its Domain Model

In this lab ...

![domain_model](../assets/domain_model.png)

## Step 1: Create Database for Microservice

1. Create the database for the microservice
    ```
    oc new-app -e MYSQL_USER=ticket -e MYSQL_PASSWORD=monster -e MYSQL_DATABASE=orders mysql:5.5 --name=orders-db
    ```

## Step 2: Setup Database

1. Switch to the `orders-service/` directory.

1. Get the IP of the Pod containing the DB
    ```
    oc get pods
    ```

1. Copy initalization scripts into Pod
    ```
    oc rsync src/main/resources/db/migration/ <your-db-pod>:/var/lib/mysql --no-perms=true
    ```

1. Connect to the DB Pod and execute SQL scripts 
    ```
    oc rsh <your-db-pod>
    cd ~
    mysql -u root orders < V1__0_ordersdb-schema.sql
    mysql -u root orders < V1__1_ordersdb-data.sql
    exit
    ```

1. Now the database is prepared to store orders.