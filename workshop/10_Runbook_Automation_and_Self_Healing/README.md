# Runbook Automation / Self Healing


This session gives an overview of how to leverage the power of runbook automation to build self-healing applications. Therefore, we will build on material we have already developed in the course of this workshop but we will also introduce new software that is needed for executing and automating runbooks. 
In this session, we will use [Ansible Tower](https://www.ansible.com/tower) as the tool for executing and managing the runbooks. 

## Use Case 

In this module we want to run a promotional campaign in our production environment. The purpose of the campaign is to add a promotional gift (e.g., Halloween/Christmas/Easter themed socks) to a given percentage of user interactions whenever they add an item to their shopping cart. We want to be able to control the amount of users during runtime in our production environment without the need to rollout a new version of the service.

In case we experience problems 


![gift socks](./assets/gift-socks.png)


## Technical Implementation

The described use case can already be served by the carts service, since this feature is already implemented, but was not used until now.
The `carts` service includes the endpoint `carts/1/items/promotional/` that can take as an input a number between 0 and 100 which corresponds to the percentages of user interactions that will receive the promotional gift. E.g., `carts/1/items/promotional/5` will enable it for 5 %, while `carts/1/items/promotional/100` will enable it for 100 % of user interactions. Therefore, we can easily change the behaviour of our `carts` service at runtime.
However, 


