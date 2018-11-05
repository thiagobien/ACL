# Run our promotional campaign

In this lab we want to run our promotional campaign in our production environment by applying a change to our configuration of the `carts` service. This service is prepared to allow to add a promotional gift (e.g., Halloween Socks, Christmas Socks, Easter Socks, ...) to a given percentage of user interactions in the `carts` service. 
Therefore, the endpoint `carts/1/items/promotional/` can take as an input a number between 0 and 100 which corresponds to the percentages of user interactions that will receive the promotional gift. E.g., `carts/1/items/promotional/5` will enable it for 5 %, while `carts/1/items/promotional/100` will enable it for 100 % of user interactions. 

![gift socks](../assets/gift-socks.png)

## Setup campaign runbook in Ansible Tower

The campaign playbook has already been set up in [Lab 2](../2_Setup_Tower). 

## Run the campaign in our PRODUCTION environment

1. Run the promotional campain
    - Navigate to _Templates_ in your Ansible Tower
    - Click on the "rocket" icon (🚀) next to your _promotion campaign userX_ job template
    ![run template](../assets/ansible-template-run.png)
    - Adjust the values accordingly for you promotional campaign:
      - Set the value for `promotion_rate: '10'` to allow for 10 % of the user interactions to receive the promotional gift
      - Do not change the `remedation_action` 
    - Click _Next_
    - Click _Launch_

1. Generate load for the `carts` service
    - Navigate to the `10_Runbook_Automation_and_Self_Healing` folder
    - Start the [load generator](./scripts/) (adjust the IP for the cart service): 
      ```
      $ cd 10_Runbook_Automation_and_Self_Healing\scripts
      $ ./add-to-cart.sh http://XX.XXX.XXX.XX/carts/1/items
      ```

1. Watch the service in Dynatrace

1. Investigate steps of auto-remediation in Dynatrace

1. Verify executed playbooks in Ansible Tower




    
