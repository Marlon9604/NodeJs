
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
        stage('Build and Push to Azure Container Registry')
         { 
           steps {
             app = docker.build('marlon9604/prueba"') 
         docker.withRegistry('https://docker202102.azurecr.io', 'acr-credentials') 
         { app.push("${env.BUILD_NUMBER}") app.push('latest') }
          }
         }
     }
  }

