
pipeline {
  environment {
    imagename = "marlon9604/prueba"
    registryCredential = 'DockerHubMarlon'
    dockerImage = ''
    registry = "https://docker202102.azurecr.io"
    registryCredential2 = 'MASP'
    ACR_NAME="docker202102"
    GIT_USER="marlon9604"
    GIT_PAT="11e126b07753a9e0a0cf846e349be3eea61d2f05"
    REPO_URL="https://github.com/Marlon9604/NodeJs.git"
    DOCKER_FILE_LOCATION="Dockerfile"
    NUMBER = "$BUILD_NUMBER" 
  }
  agent {
    label 'master'
  }
  stages {
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build imagename + NUMBER
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
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
    

  stage("Pushing to Azure Storage") {
     steps{
         script {
             withCredentials([azureServicePrincipal(credentialsId: 'MASP',
                                     subscriptionIdVariable: 'SUBS_ID',
                                     clientIdVariable: 'CLIENT_ID',
                                     clientSecretVariable: 'CLIENT_SECRET',
                                     tenantIdVariable: 'TENANT_ID')]) {
        sh 'az login --service-principal -u $CLIENT_ID -p $CLIENT_SECRET -t $TENANT_ID'
        sh 'az account set -s $SUBS_ID'
        // sh 'az group list'
        sh 'az acr login --name docker202102'
        // sh 'docker login -u=marlon9604 --password-stdin=Sebastian_96*'
        sh 'az acr task create --registry $ACR_NAME 
          --name task911backend --image marlon9604/prueba:$NUMBER 
          --context $REPO_URL --file $DOCKER_FILE_LOCATION  --git-access-token $GIT_PAT --branch master'
 }
 
                                    
         }
     }
 }
     }
  }

