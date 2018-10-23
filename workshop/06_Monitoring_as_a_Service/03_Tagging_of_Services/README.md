# Tagging of Services

In this lab you'll learn how to automatically apply tags on service level. This allows you to query service-level metrics (Response Time, Failure Rate, Throughput) automatically based on meta-data that you have passed during a deployment, e.g: *Service Type* (e.g., frontend, backend), *Deployment Stage* (e.g., dev, staging, production).

In order to tag services, Dynatrace provides **Automated Service Tag Rules**. In this lab you want Dynatrace to create a new Service-level TAG with the name **SERVICE_TYPE**. It should only apply the tag *if* the underlying Process Group has the custom meta-data property **SERVICE_TYPE**. If that is the case, you also want to take this value and apply it as the tag value for **Service_Type**.

## Step 1: Create Service Tag Rule
1. Go to Settings -> Tags -> Automatically applied tags
1. Create a new Tag with the name "SERVICE_TYPE"
1. Edit that tag and create a new rule 3.1. Rule applies to Services 3.2. Optional tag value: {ProcessGroup:Environment:SERVICE_TYPE} 3.3. Condition on "Process group properties -> SERVICE_TYPE" if "exists"
1. Click on Preview to validate rule works
1. Click on Save for the rule and then "Done"

The next screenshot shows that rule definition:



## Step 2: Search for Services with Tag
It will take about 30s until the tags are automatically applied to the services.
1. Go to Transaction & services
1. Click in "Filtered by" edit field
1. Select "ServiceType" and select "Frontend"
1. You should see your service. Open it up.

## Step 3: Create Tagging Rule for Environment
Define a Service-level tagging rule for a tag called **Environment**. Extract the Tag Value from the Process Group's Environment value **Environment** or from the Hosts **Environment** value. Make sure to only apply this rule if ProcessGroup:Environment or Host:Environment exists!

