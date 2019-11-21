# Self-healing with Keptn and Prometheus

n this tutorial you will learn how to use the capabilities of Keptn to provide self-healing for an application without modifying any of the applications code. The tutorial presented in the following will scale up the pods of an application if the application undergoes heavy CPU saturation.

## Step 1: Configure Prometheus monitoring
To inform Keptn about any issues in a production environment, monitoring has to be set up. The Keptn CLI helps with automated setup and configuration of Prometheus as the monitoring solution running in the Kubernetes cluster.

For the configuration, Keptn relies on different specification files that define service level indicators (SLI), service level objectives (SLO), and remediation actions for self-healing if service level objectives are not achieved. To learn more about the service-indicator, service-objective, and remediation file, click here [Specifications for Site Reliability Engineering with Keptn](https://github.com/keptn/keptn/blob/0.5.0/specification/sre.md).

In order to add these files to Keptn and to automatically configure Prometheus, execute the following commands:
```
(bastion)$ cd examples/onboarding-carts
(bastion)$ keptn add-resource --project=sockshop --service=carts --stage=production --resource=service-indicators.yaml --resourceUri=service-indicators.yaml
(bastion)$ keptn add-resource --project=sockshop --service=carts --stage=production --resource=service-objectives-prometheus-only.yaml --resourceUri=service-objectives.yaml
(bastion)$ keptn add-resource --project=sockshop --service=carts --stage=production --resource=remediation.yaml --resourceUri=remediation.yaml
(bastion)$ keptn configure monitoring prometheus --project=sockshop --service=carts
```

Executing this command will perform the following tasks:

* Set up Prometheus
* Configure Prometheus with scrape jobs and alerting rules for the service
* Set up the Alert Manager to manage alerts
* Add the `service-indicators.yaml`, `service-objectives.yaml` and `remediation.yaml` to your Keptn configuration repository

## Step 2: Run self-healing

### Deploy an unhealthy service version
Make sure that carts has been deployed to production succesfully. The verion is not important as all have the same performance issue that will be handled here.



### Generate load for the service
In a new terminal window, execute the following:
```
(bastion)$ cd ../load-generation/bin
(bastion)$ ./loadgenerator-linux "http://carts.sockshop-production.$(kubectl get cm keptn-domain -n keptn -o=jsonpath='{.data.app_domain}')" cpu
```

### Create a virtual service for Prometheus
In the other terminal window, execute the following to expose Prometheus as a virtual service
```
(bastion)$ cd
(bastion)$ ./installPrometheusVirtualService.sh
```
This script will expose Prometheus and output the URL.
Open this URL in a browser

### Verify load in Prometheus
In the graph tab inside Prometheus, add the following expression:

`avg(rate(container_cpu_usage_seconds_total{namespace="sockshop-production",pod_name=~"carts-primary-.*"}[5m]))`

Select the graph tab to see your CPU metrics of the carts-primary pods in the sockshop-production environment. u should see a graph which locks similar to this:![prometheus-load](../assets/prometheus-load.png)

### Watch self-healing in action
After approximately 15 minutes, the Prometheus Alert Manager will send out an alert since the service level objective is not met anymore.

To verify that an alert was fired, select the Alerts view where you should see that the alert `cpu_usage_sockshop_carts` is in the `firing` state:
![alert-manager](../assets/alert-manager.png)
The alert will be received by the Prometheus service that will translate it into a Keptn CloudEvent. This event will eventually be received by the remediation service that will look for a remediation action specified for this type of problem and, if found, executes it.

In this tutorial, the number of pods will be increased to remediate the issue of the CPU saturation.

Check the executed remediation actions by executing:
```
(bastion)$ kubectl get deployments -n sockshop-production
```
You can see that the `carts-primary` deployment is now served by two pods:
```
NAME             DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
carts-db         1         1         1            1           37m
carts-primary    2         2         2            2           32m
```
Also you should see an additional pod running when you execute:
```
(bastion)$ kubectl get pods -n sockshop-production
NAME                              READY   STATUS    RESTARTS   AGE
carts-db-57cd95557b-r6cg8         1/1     Running   0          38m
carts-primary-7c96d87df9-75pg7    2/2     Running   0          33m
```
Furthermore, you can use Prometheus to double-check the CPU usage:
![prometheus-load-reduced](../assets/prometheus-load-reduced.png)

Finally, we can consult the Keptn bridge to find the problem event.

```
(bastion)$ echo http://bridge.keptn.$(kubectl get cm keptn-domain -n keptn -o=jsonpath='{.data.app_domain}')
```
In this example, the bridge shows that the remediation service triggered an update of the configuration of the carts service by increasing the number of replicas to 2. When the additional replica was available, the wait-service waited for three minutes for the remediation action to take effect. Afterwards, an evaluation by the pitometer-service was triggered to check if the remediation action resolved the problem. In this case, increasing the number of replicas achieved the desired effect, since the evaluation of the service level objectives has been successful.
![bridge-remediation](../assets/bridge_remediation.png)

---

[Previous Step: Quality Gates](../04_Quality_Gates) :arrow_backward: :arrow_forward: [Next Step: Runbook Automation](../06_Runbook_Automation)

:arrow_up_small: [Back to overview](../)
