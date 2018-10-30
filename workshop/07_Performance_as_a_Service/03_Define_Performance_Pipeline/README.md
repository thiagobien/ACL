# Define Performance Pipeline

In this lab you will build a Jenkins pipeline for implementing the Performance as a Self-Service approach for the carts service. The purpose of this pipeline is that a developer can manually trigger it in order to run a performance test against a service (in the dev environment) and to retrieve a performance test result. This gives fast feedback if recent changes slowed down the service and whether this new version would make it through the performance in the continuous delivery pipeline.

## Step 1: Record Dynatrace Session and Push Info Events
1. Switch to the `carts/` directory and open file `./carts/Jenkins_PerfAsAService`.
1. In this file you find the empty pipeline stage **Performance Check Stage**.
1. Add the following snippet into the **steps { }** section:
    ```
    checkout scm

    recordDynatraceSession(
      envId: 'Dynatrace Tenant',
      testCase: 'loadtest',
      tagMatchRules: [
        [
          meTypes: [
            [meType: 'SERVICE']
          ],
          tags: [
            [context: 'CONTEXTLESS', key: 'app', value: "${env.APP_NAME}"],
            [context: 'CONTEXTLESS', key: 'environment', value: 'dev']
          ]
        ]
      ]
    ) 
    {
    // trigger JMeter test
    }  
    ```

## Step 2: Trigger JMeter Test by a separate Pipeline
1. Replace the comment **// trigger JMeter test** with the following snippet:
    ```
    build job: "jmeter-tests",
      parameters: [
        string(name: 'SCRIPT_NAME', value: "${env.APP_NAME}_perfcheck.jmx"),
        string(name: 'SERVER_URL', value: "${env.APP_NAME}.dev"),
        string(name: 'SERVER_PORT', value: '80'),
        string(name: 'CHECK_PATH', value: '/health'),
        string(name: 'VUCount', value: '10'),
        string(name: 'LoopCount', value: '250'),
        string(name: 'DT_LTN', value: "PerfCheck_${BUILD_NUMBER}"),
        string(name: 'FUNC_VALIDATION', value: 'no'),
        string(name: 'AVG_RT_VALIDATION', value: '250')
      ]
    ```

## Step 3: Validate the Performance Signature Definition
1. Add the following snippet after the **recordDynatraceSession**:
    ```
    perfSigDynatraceReports(
      envId: 'Dynatrace Tenant', 
      nonFunctionalFailure: 1, 
      specFile: "monspec/${env.APP_NAME}_perfsig.json"
    ) 
    ```

## Performance as a Self-Service Pipeline for Carts:
```
pipeline {
  agent {
    label 'maven'
  }
  environment {
    APP_NAME = "carts"
  }
  stages {
    stage('Performance Check') {
      steps {
        checkout scm

        recordDynatraceSession(
          envId: 'Dynatrace Tenant',
          testCase: 'loadtest',
          tagMatchRules: [
            [
              meTypes: [
                [meType: 'SERVICE']
              ],
              tags: [
                [context: 'CONTEXTLESS', key: 'app', value: "${env.APP_NAME}"],
                [context: 'CONTEXTLESS', key: 'environment', value: 'dev']
              ]
            ]
          ]
        ) 
        {
          build job: "jmeter-tests",
            parameters: [
              string(name: 'SCRIPT_NAME', value: "${env.APP_NAME}_perfcheck.jmx"),
              string(name: 'SERVER_URL', value: "${env.APP_NAME}.dev"),
              string(name: 'SERVER_PORT', value: '80'),
              string(name: 'CHECK_PATH', value: '/health'),
              string(name: 'VUCount', value: '10'),
              string(name: 'LoopCount', value: '250'),
              string(name: 'DT_LTN', value: "PerfCheck_${BUILD_NUMBER}"),
              string(name: 'FUNC_VALIDATION', value: 'no'),
              string(name: 'AVG_RT_VALIDATION', value: '250')
            ]
        }
        // Now we use the Performance Signature Plugin to pull in Dynatrace Metrics based on the spec file
        perfSigDynatraceReports(
          envId: 'Dynatrace Tenant', 
          nonFunctionalFailure: 1, 
          specFile: "monspec/${env.APP_NAME}_perfsig.json"
        ) 
      }
    }
  }
}
```