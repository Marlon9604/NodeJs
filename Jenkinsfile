pipeline {
    agent { 
        docker 
        { image 'marlon9604/prueba:nodejsimages' 
         args '-p 3000:3000'
        }
        }
        environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh './jenkins/scripts/test.sh' 
            }
}