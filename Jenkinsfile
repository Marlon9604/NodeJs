
pipeline {
  environment {
    imagename = "marlon9604/prueba"
    registryCredential = 'DockerHubMarlon'
    dockerImage = ''
    REGISTRY = 'docker202102.azurecr.io/'
    VERSION = "${env.BUILD_NUMBER}-${params.Environment}"
    PRINCIPAL_SERVICE_CREDENTIAL_ID = "ec606faf-c2d5-4a2f-9d61-43d10041b898"
  }
  agent any
  stages {
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build imagename
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("Version2.0")
          }
        }
      }
    }
    
    //  stage("run imagen") 
    //  {
    //      steps {
    //             script {
    //            dockerImage.run()
    //             }
    //              sh "docker ps"
    //      }
    //  }
    //  stage("Publish to Azure") {
    //         steps {
    //             azureWebAppPublish appName: "Docker202102",
    //                 azureCredentialsId: 'acr-credentials',
    //                 publishType: 'docker',
    //                 filePath: ' **/Dockerfile',
    //                 resourceGroup: 'PruebaCI',
    //                 sourceDirectory: '/app',
    //                 dockerImageName: 'marlon9604/prueba', 
    //                 skipDockerBuild: true,
    //                 dockerImageTag: '1',
    //                 dockerRegistryEndpoint: [credentialsId: 'acr-credentials', url: 'https://docker202102.azurecr.io']
    //             }
    //  }
 stage("Pushing to Azure Storage") {
            withCredentials([azureServicePrincipal(credentialsId: 'MASP',
                                    subscriptionIdVariable: 'SUBS_ID',
                                    clientIdVariable: 'CLIENT_ID',
                                    clientSecretVariable: 'CLIENT_SECRET',
                                    tenantIdVariable: 'TENANT_ID')]) {
        sh 'az login --service-principal -u $CLIENT_ID -p $CLIENT_SECRET -t $TENANT_ID'
    }
}
     }
  }

