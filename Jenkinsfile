pipeline {
    agent {
        docker {
            image 'Dockerfile' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm cache verify'
                sh 'npm cache clean'
                sh 'npm install' 
            }
        }
    }
}