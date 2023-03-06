const express = require("express");
const app = express();

require("dotenv").config();
let port = process.env.PORT;

const jenkins = require('jenkins-api');
const axios = require('axios');

const JENKINS_URL = 'http://jenkins.example.com';
const JOB_NAME = 'my-job';

const jenkinsClient = jenkins({
  baseUrl: JENKINS_URL,
  promisify: true,
});

jenkinsClient.build(JOB_NAME, (err, data) => {
  if (err) {
    console.error(`Failed to trigger Jenkins build: ${err}`);
    return;
  }
  
  console.log(`Jenkins build started with build number: ${data}`);
  
  setInterval(() => {
    jenkinsClient.last_build_info(JOB_NAME, (err, data) => {
      if (err) {
        console.error(`Failed to get Jenkins build status: ${err}`);
        return;
      }
      
      if (data.result === 'FAILURE') {
        console.log('Build failed');
        
        const webhookUrl = 'https://discord.com/api/webhooks/<your-webhook-id>/<your-webhook-token>';
        const message = 'Jenkins build failed';
        
        axios.post(webhookUrl, {
          content: message,
        })
        .then(() => {
          console.log('Discord notification sent');
        })
        .catch((err) => {
          console.error(`Failed to send Discord notification: ${err}`);
        });
        
        clearInterval(intervalId);
      }
    });
  }, 5000);
});


app.listen(port, () => {
  console.log("sssss", port);
});
