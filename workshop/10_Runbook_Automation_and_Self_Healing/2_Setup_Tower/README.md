# Setup Ansible Tower

1. Add **Git credentials** to your Ansible Tower organization
    - Name: git-token
    - Organization: orgX (X... your workshop user number)
    - Credential Type: Source Control (click on magnifier and search for the correct type)
    - Type Details: your Github username and your password (password will be encrypted and can not be shown again once stored)

    ![create credentials](../assets/create-credential.png) 

1. Add a **Project** in Ansible Tower
    - Name: self-healing
    - Organization: orgX (X... your workshop user number)
    - SCM Type: Git
    - SCM Url: `https://github.com/dynatrace-innovationlab/acl-docs`
    - SCM Credential: git-token
    - SCM Update Options:
      - Check _Clean_: overwrite local changes each time you get latest SCM version

    ![create project](../assets/create-project.png)

1. Create **Inventory** to store variables
    - Name: inventory
    - Organization: orgX (X... your workshop user number)
    - Variables: copy & paste the following snippet
      ```
      ---
      tenantid: "YOUR-TENANT"
      apitoken: "YOUR-API-TOKEN"
      carts_delay_url: "http://SERVICE-URL/carts/1/items/delay"
      carts_error_url: "http://SERVICE-URL/carts/1/items/errors"
      
      commentuser: "Ansible Playbook"
      dtcommentapiurl: "https://{{tenantid}}.live.dynatrace.com/api/v1/problem/details/{{pid}}/comments?Api-Token={{apitoken}}"
      dteventapiurl: "https://{{tenantid}}.live.dynatrace.com/api/v1/events/?Api-Token={{apitoken}}"
      ```

      ![create inventory](../assets/create-inventory.png)

1. Create **Job Template** for our playbooks
    - Name: remediation-userX (X... your workshop user number) <br>
      (_job template names have to be unique across the whole Ansible Tower installation_)
    - Job Type: Run
    - Inventory: inventory
    - Project: self-healing
    - Playbook: `10_Runbook_Automation_and_Self_Healing\playbooks\remediation.yaml`
    - Extra Variables: check box _Prompt on Launch_ 

    ![create job template](../assets/create-job-template.png)

