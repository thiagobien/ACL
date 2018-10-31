# Define Request Attributes in Dynatrace
In this lab you will learn how to capture request attributes based on web request data as described [here] (https://www.dynatrace.com/support/help/monitor/transactions-and-services/request-attributes/how-do-i-capture-request-attributes-based-on-web-request-data/)

## Step 1: Create Request Attribute for Load Test Name (LTN)
1. Go to **Settings**, **Server-side monitoring**, and click on **Request attributes**.
1. Click the **Create new request attribute** button.
1. Provide a unique *Request attribute name*: `LTN`.
1. Click on **Add new data source**.
1. Select the *Request attribute source*: `HTTP request header`.
1. Specify the *Parameter name*: `x-dynatrace-test`.
1. Open *Optionally restrict or process the captured parameter(s) further*
1. At *Preprocess by extracting substring* set: `between` > `LTN=` > `;`
1. Finally, click **Save**, click **Save**.

![request-attribute](../assets/request-attribute.png)

## Step 2: Create Request Attribute for Load Script Name (LSN)
1. Go to **Settings**, **Server-side monitoring**, and click on **Request attributes**.
1. Click the **Create new request attribute** button.
1. Provide a unique *Request attribute name*: `LSN`.
1. Click on **Add new data source**.
1. Select the *Request attribute source*: `HTTP request header`.
1. Specify the *Parameter name*: `x-dynatrace-test`.
1. Open *Optionally restrict or process the captured parameter(s) further*
1. At *Preprocess by extracting substring* set: `between` > `LSN=` > `;`
1. Finally, click **Save**, click **Save**.

## Step 2: Create Request Attribute for Test Script Name (TSN)
1. Go to **Settings**, **Server-side monitoring**, and click on **Request attributes**.
1. Click the **Create new request attribute** button.
1. Provide a unique *Request attribute name*: `TSN`.
1. Click on **Add new data source**.
1. Select the *Request attribute source*: `HTTP request header`.
1. Specify the *Parameter name*: `x-dynatrace-test`.
1. Open *Optionally restrict or process the captured parameter(s) further*
1. At *Preprocess by extracting substring* set: `between` > `LTN=` > `;`
1. Finally, click **Save**, click **Save**.