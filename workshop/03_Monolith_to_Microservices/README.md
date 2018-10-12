# Monolith to Microservices 

![ticketmonster](assets/ticketmonster.png)

This module gives an overview of ...



## Prepare Environment for Labs

1. Set up a management zone to "filter" your own OpenShift project. Login to the Dynatrace tenant and create a management zone `wsXX` (XX... your assigned number). Please ask your instructor for Dynatrace tenant and login credentials.
<!--  `https://nbt24337.live.dynatrace.com/` -->

1. Clone the repo from [monolith to microservices](https://github.com/dynatrace-innovationlab/monolith-to-microservice-openshift) repository
    ```
    git clone https://github.com/dynatrace-innovationlab/monolith-to-microservice-openshift.git
    ```

1. Create the project in OpenShift
    ```
    oc login <OurClusterIP:port>
    ```
    * User: `wsXX` where XX... your assigned number<br>
    * Password: ask instructor 
    
1. After the successful login, create your own project:
    ```
    oc new-project wsXX
    ```