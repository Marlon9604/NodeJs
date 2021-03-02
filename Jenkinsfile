
pipeline {
  environment {
    imagename = "marlon9604/prueba"
    registryCredential = 'DockerHubMarlon'
    dockerImage = ''
    registry = "https://docker202102.azurecr.io"
    registryCredential2 = 'MASP'
    tag = "$BUILD_NUMBER"
  }
  agent any
  stages {
    // stage('Building image') {
    //   steps{
    //     script {
    //       dockerImage = docker.build imagename
    //     }
    //   }
    // }
     stage('Build the image') {
      steps{
        script {
          dockerImage = docker.build 
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
    
        stage('Push the image') {
      steps{
        script {
          docker.withRegistry('', registryCredential2) {
             docker_image.push()
           }
        }
      }
    }

//  stage("Pushing to Azure Storage") {
//     steps{
//         script {
//             withCredentials([azureServicePrincipal(credentialsId: 'MASP',
//                                     subscriptionIdVariable: 'SUBS_ID',
//                                     clientIdVariable: 'CLIENT_ID',
//                                     clientSecretVariable: 'CLIENT_SECRET',
//                                     tenantIdVariable: 'TENANT_ID')]) {
//         sh 'az login --service-principal -u $CLIENT_ID -p $CLIENT_SECRET -t $TENANT_ID'
   
// }
                                    
//         }
//     }
// }
     }
  }

