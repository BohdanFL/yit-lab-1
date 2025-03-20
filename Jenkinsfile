pipeline {
    agent {
        // docker {
        //     image 'node:14'
        //     args '-p 3000:3000'
        // }
        args '-p 3000:3000'
    }
    tools {
        nodejs '22.13.1'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){ 
            steps {
                sh 'npm run test'
            }
        }
        stage('Deliver') { 
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh './jenkins/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/kill.sh' 
            }
        }
    }
}