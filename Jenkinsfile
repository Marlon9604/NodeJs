
pipeline {
  environment {
    registry = 'https://docker202102.azurecr.io'
    ACR_NAME = 'docker202102'
    REPO_URL = 'https://github.com/Marlon9604/NodeJs.git#master'
    DOCKER_FILE_LOCATION = 'Dockerfile'
    NUMBER = ":$BUILD_NUMBER"
  }
  agent {
    label 'master'
  }
  stages {
    stage('Pushing to Azure Storage') {
      steps {
        script {
          withCredentials([azureServicePrincipal(credentialsId: 'MASP',
                                     subscriptionIdVariable: 'SUBS_ID',
                                     clientIdVariable: 'CLIENT_ID',
                                     clientSecretVariable: 'CLIENT_SECRET',
                                     tenantIdVariable: 'TENANT_ID')]) {
            sh 'az login --service-principal -u $CLIENT_ID -p $CLIENT_SECRET -t $TENANT_ID'
            sh 'az account set -s $SUBS_ID'
            sh 'az acr task create --registry $ACR_NAME \
              --name tareadocker --image $ACR_NAME$NUMBER \
              --context $REPO_URL --file $DOCKER_FILE_LOCATION  \
              --git-access-token $TokenGit '
            sh 'az acr task run --registry $ACR_NAME  --name tareadocker'
          }
        }
      }
    }
  }
}
