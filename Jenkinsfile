
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
     stage("run imagen") 
     {
         steps {
                 echo "Run docker image"
               dockerImage.run("Version2.0")
         }
           }
  }
}