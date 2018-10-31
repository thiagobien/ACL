# Define Performance Pipeline

In this lab you will build a Jenkins pipeline for implementing the Performance as a Self-Service approach for the carts service. The purpose of this pipeline is that a developer can manually trigger it in order to run a performance test against a service (in the dev environment) and to retrieve a performance test result. This gives fast feedback if recent changes slowed down the service and whether this new version would make it through the performance in the continuous delivery pipeline.

## Step 1: Record Dynatrace Session and Push Info Events
1. Switch to the `carts/` directory and open file `./carts/Jenkins.performance`.
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
    container('jmeter') {
      script {
        def status = executeJMeter ( 
          scriptName: "jmeter/${env.APP_NAME}_perfcheck.jmx",
          resultsDir: "PerfCheck_${BUILD_NUMBER}",
          serverUrl: "${env.APP_NAME}.dev", 
          serverPort: 80,
          checkPath: '/health',
          vuCount: 10,
          loopCount: 250,
          LTN: "PerfCheck_${BUILD_NUMBER}",
          funcValidation: false,
          avgRtValidation: 2000
        )
        if (status != 0) {
          currentBuild.result = 'FAILED'
          error "Performance check failed."
         }
      }
    }
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
@Library('dynatrace@master') _

pipeline {
  agent {
    label 'git'
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
          container('jmeter') {
            script {
              def status = executeJMeter ( 
                scriptName: "jmeter/${env.APP_NAME}_load.jmx",
                resultsDir: "PerfCheck_${BUILD_NUMBER}",
                serverUrl: "${env.APP_NAME}.dev", 
                serverPort: 80,
                checkPath: '/health',
                vuCount: 10,
                loopCount: 250,
                LTN: "PerfCheck_${BUILD_NUMBER}",
                funcValidation: false,
                avgRtValidation: 2000
              )
              if (status != 0) {
                currentBuild.result = 'FAILED'
                error "Performance check failed."
              }
            }
          }
        }

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