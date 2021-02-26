
pipeline {
  environment {
    imagename = "marlon9604/prueba"
    registryCredential = 'DockerHubMarlon'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/ismailyenigul/hacicenkins.git', branch: 'master', credentialsId: 'ismailyenigul-github-user-token'])

      }
    }
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
            dockerImage.push("$BUILD_NUMBER")
             dockerImage.push('latest')
          }
        }
      }
    }
  }
}