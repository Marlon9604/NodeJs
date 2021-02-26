
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
            sh "docker run -p 8090:8094 marlon9604/prueba:Version2.0"
            sh "docker ps"
            sh "docker stop marlon9604/prueba:Version2.0"
               }
          }
  }
}