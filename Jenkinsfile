
pipeline {
  environment {
    imagename = 'marlon9604/prueba'
    registryCredential = 'DockerHubMarlon'
    dockerImage = ''
    registry = 'https://docker202102.azurecr.io'
    registryCredential2 = 'MASP'
    ACR_NAME = 'docker202102'
    GIT_USER = 'marlon9604'
<<<<<<< HEAD
    GIT_PAT = 'eed53abe87df57db50b2b4e7cb0146ca50295bfa'
=======
    GIT_PAT = '61e04196a67093d980baa7fe0bdc32ff13a0fd37'
>>>>>>> 9e8168239084204fec855d6581c518ca31cd7d2f
    REPO_URL = 'https://github.com/Marlon9604/NodeJs.git#master'
    DOCKER_FILE_LOCATION = 'Dockerfile'
    NUMBER = ":$BUILD_NUMBER"
  }
  agent {
    label 'master'
  }
  stages {
    // stage('Building image') {
    //   steps{
    //     script {
    //       dockerImage = docker.build imagename + NUMBER
    //     }
    //   }
    // }
    // stage('Deploy Image') {
    //   steps{
    //     script {
    //       docker.withRegistry( '', registryCredential ) {
    //         dockerImage.push()
    //       }
    //     }
    //   }
    // }

    //  stage("run imagen")
    //  {
    //      steps {
    //             script {
    //            dockerImage.run()
    //             }
    //              sh "docker ps"
    //      }
    //  }

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
            // sh 'az group list'
            // sh 'az acr login --name docker202102'
            // sh 'docker login -u=marlon9604 --password-stdin=Sebastian_96*'
            // sh 'az acr task create --registry docker202102 --name tareadocker --image marlon9604/prueba:30 --context https://github.com/Marlon9604/NodeJs/tree/master --file Dockerfile --git-access-token 1954a057687f1574d5696bc6c8962abdc4f945bb'
            sh 'az acr task create --registry $ACR_NAME \
              --name tareadocker --image docker202102$NUMBER \
              --context $REPO_URL --file $DOCKER_FILE_LOCATION  \
              --git-access-token c3de2c67559663f25b9887e73c8dcf6ea19797b7 '
            sh 'az acr task run --registry $ACR_NAME  --name tareadocker'
                                     }
        }
      }
    }
  }
}
