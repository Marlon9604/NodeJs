
pipeline {
  environment {
    imagename = "marlon9604/prueba"
    registryCredential = 'DockerHubMarlon'
    dockerImage = ''
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
     stage("Publish to Azure") {
            steps {
                azureWebAppPublish appName: "Docker202102",
                    azureCredentialsId: 'acr-credentials',
                    publishType: 'docker',
                    filePath: ' **/Dockerfile',
                    resourceGroup: 'PruebaCI',
                    sourceDirectory: '/app',
                    dockerImageName: 'marlon9604/prueba', 
                    skipDockerBuild: true,
                    dockerImageTag: '1',
                    dockerRegistryEndpoint: [credentialsId: 'acr-credentials', url: 'https://docker202102.azurecr.io']
                }
     }
     }
  }

