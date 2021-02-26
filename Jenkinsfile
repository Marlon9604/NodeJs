pipeline {
    agent { docker { image 'marlon9604/prueba:tagname' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}