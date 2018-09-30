# Autonomous Cloud Labs - Docs
docs, instructions, additional material for autonomous cloud labs - Dynatrace Sockshop Workshop


# jenkins-dtcli in Jenkins-X

(instructions from Andi)

1. Added the two global Jenkins Variables DT_API_TOKEN and DT_TENANT_ID
Once we have the Dynatrace Tenant setup that we use to monitor the envioronment we have to specify the correct URL and API Token
  ![](./assets/dtcli-1.jpg)

1. Added the Kubernetes Pod Template and point it to the Docker Image that Pete built and pushed on Quay
Here the question is whether we want to keep it on Quay or whether we push it to the local Jenkins-X Registry. The container itself can easily be built from the dynatrace-cli github repo. I am good with Quay for now
  ![](./assets/dtcli-2.jpg)

1. JMeter
    -	The project jmeter-tests has not yet been imported: https://github.com/acm-workshop/jmeter-tests -> can you do that?
        - This project calls the JMeter tests that are in the scripts subdirectory
    - The jmeter-tests is using a JMeter Kubernetes Pod Template – similar to the DT CLI – I also configured this one now
  ![](./assets/dtcli-3.jpg)  

1. Missing is the call of the JMeter Tests  
I have seen that right now the test stages in the pipelines are commented out. Once you import the JMeter-Test Repo you should be able to comment them in. Please have a look at the catalogue Jenkinsfile where we already changed the pipeline to call the “JMeter-tests” vs the old “Jmeter-as-container” job
Please make sure that every project includes these stages and also make sure that they are calling the correct script
  ![](./assets/dtcli-4.jpg)
  
# Performance Signature in Jenkins-X

(instructions from Andi)

1. Install & Configure Performance Signature for Dynatrace Plugin
This plugin is from our partner T-Systems https://plugins.jenkins.io/performance-signature-dynatracesaas
* Install it through the Jenkins -> Manage Plugins
* Configure a Dynatrace API Credential
  ![](./assets/perfsignature_dtcredential.jpg)
* Configure the plugin in the global settings and provide the Dynatrace Tenant Credentials
  ![](./assets/perfsignature_config.jpg)

# jx cli for your local machine

How to configure jx cli on your local macine if you already have a kubectl installed and configured.

1. export the current context to be able to switch back  
   `kubectl config current-context`
1. Config kubectl with the jenkins-x cluster  
  `gcloud container clusters get-credentials dynatrace-jenkins-x --zone europe-west1-b --project sai-research`
1. Set default namespace to jx, there are (probabyly more than) two ways to do it:
  - Option a  
   `kubectl config set-context $(kubectl config current-context) --namespace=jx`
  - Option b    
    `jx context` and select the desired context  
    `jx ns jx` to set the namespace to jx





