
pipeline {
  environment {
    imagename = "marlon9604/prueba"
    registryCredential = 'DockerHubMarlon'
    dockerImage = ''
    registry = "https://docker202102.azurecr.io"
    registryCredential2 = 'MASP'
  }
  agent {
    label 'master'
  }
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
                                     tenantIdVariable: 'TENANT_ID',
                                     groupResource: 'RESOURCE_GROUP')]) {
        sh 'az login --service-principal -u $CLIENT_ID -p $CLIENT_SECRET -t $TENANT_ID'
        sh 'az account set -s $SUBS_ID'
        sh 'az acr login --name Docker202102 --resource group PruebaCI'
        sh 'az acr build --image $REPO/$IMAGE_NAME:$TAG --registry $CONTAINER_REGISTRY --file Dockerfile . '
 }
 
                                    
         }
     }
 }
     }
  }

