# Monolith to Microservices 

![ticketmonster](assets/ticketmonster.png)

This module gives an overview of ...



## Prepare Environment for Labs

1. Set up a management zone to "filter" your own OpenShift project. Login to the Dynatrace tenant and create a management zone `wsXX` (XX... your assigned number). Please ask your instructor for Dynatrace tenant and login credentials.
<!--  `https://nbt24337.live.dynatrace.com/` -->

1. We will need some sources of the [monolith to microservices](https://github.com/dynatrace-innovationlab/monolith-to-microservice-openshift) repository, so we will clone it first.

    ```
    git clone https://github.com/dynatrace-innovationlab/monolith-to-microservice-openshift.git
    ```
    However, we will use prebuilt images during the course of the workshop to save some time.

1. Create the project in OpenShift
    ```
    oc login <OurClusterIP:port>
    ```
    your user: `wsXX` where XX... your assigned number<br>
    password: ask your instructor :) 
    
    After the successful login, create your own project:
    ```
    oc new-project wsXX
    ```