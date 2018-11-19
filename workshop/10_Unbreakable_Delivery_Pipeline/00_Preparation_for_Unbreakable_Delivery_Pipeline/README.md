# Prep-work for Unbreakable Delivery Pipeline


## Step 1: Add Env Variables to Jenkins

1. Go to **Jenkins** > **Manage Jenkins** > **Configure System**.
1. Scroll down to **Global properties** and click Add.
1. Set name to `DT_TENANT_URL`
1. Set value to your dynatrace tenant.
1. Click Add again. 
1. Set name to `DT_API_TOKEN`
1. Set value to your API Token.

## Step 2: Add a Container to the Kubernetes Pod Template kubegit
1. Scroll down to **Kubernetes Pod Template** named `kubegit`
1. Click **Add Container**.
1. Set name to `curl`
1. Set Docker image to `byrnedo/alpine-curl`
1. Finally, click **Save**.


