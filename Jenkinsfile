
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
                    azureCredentialsId: "ec606faf-c2d5-4a2f-9d61-43d10041b898",
                    publishType: "file",
                    filePath: "**/*.*",
                    resourceGroup: "PruebaCI",
                    sourceDirectory: "/app"
            }
        }
     }
  }

