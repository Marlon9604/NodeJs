
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

      stage('Push Images to ACR') {
            steps {
                script {
                    dir('custom-images') {
                        azureCLI commands: [[exportVariablesString: '', script: 'az acr login --name ' + REGISTRY]], principalCredentialId: PRINCIPAL_SERVICE_CREDENTIAL_ID
                        bat "docker push marlon9604/prueba:123"
                    }
                }
            }
        }
     }
  }

