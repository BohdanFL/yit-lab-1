pipeline {
    agent any
    tools {
        nodejs '22.13.1'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
                stage('Deliver') { 
            steps {
                sh './jenkins/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/kill.sh' 
            }
        }
    }
}