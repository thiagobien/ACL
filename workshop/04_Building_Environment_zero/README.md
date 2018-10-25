# Building environment zero

In this module you'll learn how to setup your environment in your own GKE cluster for the rest of the week for all labs. We'll setup [Jenkins](https://jenkins.io/) and a [Docker registry](https://docs.docker.com/registry/), fork several GitHub repositories from an existing GitHub organization ([dynatrace-sockshop](https://github.com/dynatrace-sockshop)) to yours, and configure build pipelines for all microservices in of the Sockshop application, that are hosted in said GitHub repositories. At the end of this session, your continuous CI/CD environment is ready to be explored, configured, and run.

## Troubleshooting and useful links
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)