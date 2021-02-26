pipeline {
    agent { docker { image 'marlon9604/prueba:nodejsimages' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}