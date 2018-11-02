# Monitoring as a Service

This session you will learn how to rollout Dynatrace Fullstack monitoring across your infrastructure. Fullstack monitoring means that every host, app, and service that gets deployed will automatically - without any additional configuration - deliver key metrics and meta-data for the individual stakeholders: dev, architects, operations, and business.

To achieve that goal, you will learn how to:
* Rollout Dynatrace OneAgent on a Kubernetes Cluster
* Pass additional meta-data to your hosts and processes
* Ensure proper PG (process group), PGI (process group instance) and service detection via detection rules
* Push additional deployment & configuration change event details to Dynatrace to enrich the AI's data set
* Create Management Zones to make data easily available for the different groups: dev, test, operations, business
* Create Dashboards for the individual stakeholders

For further information on how to organize monitored entities, it is recommended to read [Best practices on organize monitored entities](https://www.dynatrace.com/support/help/organize-monitored-entities/).

# Pre-Requisits

* Before starting with this module, please complete the following modules:
    * Building Environment zero
    * Developing Microservices

* Access to *Bastion host*

# Prepare Environment for Labs

1. Clone or download this GitHub repository to your local machine.
    ```
    git clone https://github.com/dynatrace-innovationlab/acl-docs.git
    ```

1. Switch to the directory `06_Monitoring_as_a_Service`.

