pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage("Slave Node1") {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: "git@github.com:alex197925/cypress-test-website.git"
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run triggerAllTests-autoTestStore-dashboard'
                    }
                }
                stage("Slave Node2") {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: "git@github.com:alex197925/cypress-test-website.git"
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run triggerAllTests-autoTestStore-dashboard'
                    }
                }
            }
        }
    }
}