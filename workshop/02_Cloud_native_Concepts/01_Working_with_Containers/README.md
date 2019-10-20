# Working with Container Images and Containers

In this lab you'll learn how to create a container image and how to run a container based on this image. During this activity you will pull an image from a global container registry to get hands-on experience with container registries in general.

## Step 1: View the Dockerfile

1. View the `Dockerfile` using an editor.
    ```
    (bastion)$ cd ~/acl-repo/01_Working_with_Containers
    (bastion)$ vi Dockerfile
    ```

1. The `Dockerfile` should look like this:
    ```
    FROM ubuntu:latest
    COPY . /app
    WORKDIR /app  
    ENTRYPOINT [ "sh" ]  
    CMD ["hello_world.sh"]
    ```

## Step 2. Build and Tag a Container Image

1. Build the container image (`-t` specifies the repository and a tag). The `$USER` variable will tag the image with your username.
    ```
    (bastion)$ docker build -t acm-workshop/hello-world:$USER .
    ```

1. List all container images on your local machine.
    ```
    (bastion)$ docker images
    ```

1. (optional) Set another tag.
    ```
    (bastion)$ docker tag acm-workshop/hello-world:$USER acm-workshop/hello-world:$USER-stable
    ```

1. List all container images on your local machine.
    ```
    (bastion)$ docker images
    ```

## Step 3. Run a Container

1. Run the container based on a container image.
    ```
    (bastion)$ docker run acm-workshop/hello-world:$USER-stable
    ```
