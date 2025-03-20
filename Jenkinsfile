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
    }
}