# Gathering Facts

During this section we will gather all the information that we will lateron use during the labs. We will run a script that places all this information in a credentials file which other scripts can then pick up

## Data needed
* Credentials for `bastion host`
* Access to the `Dynatrace Tenant` created for you
* A `Dynatrace API token`. More information can be found [here](dynatrace_api_token.md)
* A `Github account`
* A `Github organization` which we will use to fork the sockshop repositories. More information can be found [here](github_org.md)
* A `Github PAT` (Personal Access Token) which we will use to authenticate with Github. More information can be found [here](github_pat.md)

## Steps

1. After you have gathered all the information that you need, execute the following command on your bastion host from your home directory:
    ```
    (bastion)$ cd
    (bastion)$ chmod +x defineCredentials.sh
    (bastion)$ ./defineCredentials.sh
    ```
1. This will ask you for the following information:
    * Dynatrace Tenant (both without https)
        - For SaaS: abc123456.live.dynatrace.com
        - For Managed: mydomain/e/1234567890123456789
    * Dynatrace API Token
    * GitHub User Name
    * GitHub Personal Access Token
    * GitHub User Email
    * GitHub Organization
1. Confirm the details

---

[Previous Step: Check Prerequisites](../0_Check_Prerequisites) :arrow_backward: :arrow_forward: [Next Step: Fork Github Repositories](../2_Fork_GitHub_Repositories)

:arrow_up_small: [Back to overview](../)
