
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
      stage('Build the Image and Push to Azure Container Registry') 
      {                
      withDockerRegistry([credentialsId: 'MASP', url: 'https://docker202102.azurewebsites.net']) {                
       dockerImage.push("Version2.0")               
      }        
     }
  }
}


steps:
- task: AzureWebAppContainer@1
  displayName: 'Azure Web App on Container Deploy: Docker202102'
  inputs:
    azureSubscription: 'ASC resource'
    appName: Docker202102
    containers: 'docker202102.azurecr.io/Docker202102:$(Build.BuildId)'
