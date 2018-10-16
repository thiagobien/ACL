# Identify a Microservice using Dynatrace

In this lab you'll learn how to virtually break a monolithic application. For this task, Dynatrace provides the feature of **Custom service detection** that allows to define an entry point at which the monolith should be broken without touching any line of code.

For more details about this lab, please take a look at the following blog post: [Identifying a Microservice](https://www.dynatrace.com/news/blog/monolith-to-microservices-how-to-identify-your-first-microservice/)

![virtually_break](../assets/virtually_break.png)

## Step 1: Define Custom Service Entry Points
1. Login to the Dynatrace tenant: tenant-url (Please ask instructor for Dynatrace tenant and login credentials.)
1. Choose the **Settings** tab from the left menu.
1. Open **Server-side service monitoring** and **Custom service detection** in the Settings page.
1. Click on **Define Jave service**, set name of custom service to `ws-xx-orders-service` and click **Find entry point**.
1. Select the process group that contains your entry point `ticketmonster-monolith` and click **Continue**.
1. Search for loaded classes and interfaces with name `BookingService`, select `org.jboss.examples.ticketmonster.rest.BookingService` and click **Continue**.
1. Select `createBooking` as entry point and click **Finish**.

## Step 2: Book a Ticket on TicketMonster
1. Open your **ticketmonster-ui-v1** in a browser.
1. Click on **Events**, **Concerts** and on, e.g., **Rock concert of the decade**.
1. Select the **Venue**, **Date** and click on **Order ticket**.
1. Select tickets by selecting a section and the number of tickets.
1. **Checkout** your ticket booking after specifying your email.
1. Review your booking details.

## Step 3: Consider Service Flow in Dynatrace
1. Choose the **Transaction & services** tab from the left menu.
1. Select service **TicketMonsterUI**.
1. Click on **View service flow**.
1. Finally, you see the service flow containing the virtual microservice `ws-xx-orders-service`.
