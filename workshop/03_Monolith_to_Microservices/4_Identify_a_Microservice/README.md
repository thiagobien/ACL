# Identify a Microservice using Dynatrace

In this lab you'll learn how to virtually break a monolithic application.

For more details about this lab, please take a look at the following blog post: [Identifying a Microservice](https://www.dynatrace.com/news/blog/monolith-to-microservices-how-to-identify-your-first-microservice/)

![virtually_break](../assets/virtually_break.png)

## Step 1: Define Custom Service Entry Points
1. Login to the Dynatrace tenant: tenant-url (Please ask instructor for Dynatrace tenant and login credentials.)
1. From the left menu, choose the **Settings** tab.
1. In the Settings page, open **Server-side service monitoring** and **Custom service detection**.
1. Select the process group that contains your entry point `ticketmonster-monolith` and click **Continue**.
1. Search for loaded classes and interfaces with names `BookingService`, select `org.jboss.examples.ticketmonster.rest.BookingService` and click **Continue**.
1. Select `createBooking` as entry points and click **Finish**.

## Step 2: Book a Ticket on TicketMonster
1. 

## Step 3: See Service Flow in Dynatrace
1. 