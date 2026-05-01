pipeline {
    agent any

    stages {

        stage('Clone Code') {
    steps {
        git branch: 'main', url: 'https://github.com/Dharti-git/docker-nodejs-mongodb-app.git'
    }
}

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop node-container || true'
                sh 'docker rm node-container || true'
                sh 'docker run -d --name node-container -p 3000:3000 node-app'
            }
        }
    }
}
