# Autonomous Cloud Labs - Docs
docs, instructions, additional material for autonomous cloud labs - Dynatrace Sockshop Workshop


# Jx Cli

How to configure jx cli on your local macine if you already have a kubectl installed and configured.
1. export the current context to be able to switch back 
   `kubectl config current-context`
1. Config kubectl with the jenkins-x cluster  `gcloud container clusters get-credentials dynatrace-jenkins-x --zone europe-west1-b --project sai-research`
1. Set default namespace to jx: `kubectl config set-context $(kubectl config current-context) --namespace=jx`

