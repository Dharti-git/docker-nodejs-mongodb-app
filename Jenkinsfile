pipeline {
    agent any
    
    stages {
        stage('Clone Code') {
            steps {
                // Don't add any checkout here - let Jenkins handle it
                echo "Code already cloned"
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }
        
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name node-app node-app'
            }
        }
    }
}
