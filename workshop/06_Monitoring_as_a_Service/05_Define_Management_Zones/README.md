# Define Management Zones in Dynatrace to create Access Control

[Management Zones](https://www.dynatrace.com/news/blog/grant-fine-grained-access-rights-using-management-zones-beta/) allow you to define who is going to see and who has access to what type of Fullstack data. There are many ways to slice your environment and it will depend on your organizational structure & processes.
This lab assumes that there are following teams:
* a Frontend and a Backend Team (responsible for any Node.js services)
* a Dev Team responsible for the whole Development Environment
* an Architecture Team responsible for Development & Staging
* an Operations Team responsible for all Infrastructure (=all Hosts)
* a Business Team responsible for all applications

Based on this assumption, you will learn how to create Management Zones that will give each team access to the data they are supposed to see. 

## Step 1: Create Management Zone for Frontend & Backend Team
1. Go to Settings -> Preferences -> Management Zones
1. Create a Zone named "Frontend Services"
1. Add a new rule for "Services"
1. Define a condition for SERVICE_TYPE=FRONTEND
1. Select "Apply to underlying process groups of matching services"
1. Add a second rule for SERVICE_TYPE=BACKEND
1. Save and test the Management Zone in the Smartscape View

**Step 2: Create Management Zone for Dev Team**
Create a Zone that shows ALL entities that are tagged with Environment=Development

**Step 3: Create Management Zone for Architect Team**
Create a Zone that shows ALL entities that are tagged with Environment=Development or Environment=Staging

**Step 4: Create Management Zone for Operations Team**
Create a Zone for all HOSTS & Processes.

**Step 5: Create Management Zone for Business Team**
Create a Zone that covers all Web Applications