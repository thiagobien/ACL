# Define the Performance Signature for the Carts Service

In this lab you'll learn how to define the performance signature of the carts service. In more details, this lab focues on validating the performance of the service based on the:
* Average response time
* Percentile of response time
* Number of requests
* Server side failure rate  

## Step 1: Add a timeseries for Response Time
1. Switch to the `carts/` directory and open file `./carts/monspec/carts_perfsig.json`.
1. In this file you find the empty JSON array: **"timeseries": []**
1. Add the following query to retrieve timeseries data for the **average response time** of the carts service. 
    ```
    {
        "timeseriesId" : "com.dynatrace.builtin:service.responsetime",
        "aggregation"  : "avg",
        "tags"         : "app:carts,environment:dev",
    },
    ```
1. Specify the upper limit (in micro seconds):
    ```
        ...
        "tags"         : "app:carts,environment:dev",
        "upperLImit"   : 1000000
    },
    ```
1. Add the following query to retrieve timeseries data about the **percentile of response time** of the carts service. 
    ```
    {
        "timeseriesId"  : "com.dynatrace.builtin:service.responsetime",
        "aggregation"   : "percentile",
        "tags"          : "app:carts,environment:dev"
    },
    ```
1. After this step, the **timeseries** array should look as follows: 
    ```
    "timeseries" : [
        {
            "timeseriesId" : "com.dynatrace.builtin:service.responsetime",
            "aggregation"  : "avg",
            "tags"         : "app:carts,environment:dev",
            "upperLImit"   : 1000000
        },
        {
            "timeseriesId"  : "com.dynatrace.builtin:service.responsetime",
            "aggregation"   : "percentile",
            "tags"          : "app:carts,environment:dev"
        },
    ]
    ```

## Step 2: Add a timeseries for Requests
1. Add the following query to retrieve timeseries data about the **number of requestes** of the carts service. 
    ```
    {
        "timeseriesId" : "com.dynatrace.builtin:service.responsetime",
        "aggregation"  : "avg",
        "tags"         : "app:carts,environment:dev",
    },
    ```
1. Specify the lower limit (number of requests):
    ```
        ...
        "tags"         : "app:carts,environment:dev",
        "lowerLImit"   : 1000
    },
    ```

## Step 3: Add a timeseries for Failure Rate
1. Add the following query to retrieve timeseries data about the **failure rate** of the carts service. 
    ```
    {
        "timeseriesId"  : "com.dynatrace.builtin:service.serversidefailurerate",
        "aggregation"   : "avg",
        "tags"          : "app:carts,environment:dev"
    }
    ```

## Performance Signature for Carts:
```
{
    "timeseries" : [
        {
            "timeseriesId"  : "com.dynatrace.builtin:service.responsetime",
            "aggregation"   : "avg",
            "tags"          : "app:carts,environment:dev",
            "upperLImit"    : 1000000
        },
        {
            "timeseriesId"  : "com.dynatrace.builtin:service.responsetime",
            "aggregation"   : "percentile",
            "tags"          : "app:carts,environment:dev"
        },
        {
            "timeseriesId"  : "com.dynatrace.builtin:service.server_side_requests",
            "aggregation"   : "count",
            "tags"          : "app:carts,environment:dev",
            "lowerLImit"    : 1000
        },
        {
            "timeseriesId"  : "com.dynatrace.builtin:service.serversidefailurerate",
            "aggregation"   : "avg",
            "tags"          : "app:carts,environment:dev"
        }
    ]
}
```
