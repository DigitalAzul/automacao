require("dotenv").config()
module.exports = shipit => {
    require('shipit-deploy')(shipit);
    require('shipit-shared')(shipit);
  
    const appName = 'app-automacao';
  
    shipit.initConfig({
      default: {
        deployTo: '/home/x900l/app-aytomacao',
        repositoryUrl: process.env.REPOSITORY_URL,
        keepReleases: 5,
        shared: {
          overwrite: true,
          dirs: ['node_modules']
        }
      },
      production: {
        servers: process.env.SSH_SERVER
      }
    });
  
    const path = require('path');
    const ecosystemFilePath = path.join(
      shipit.config.deployTo,
      'shared',
      'ecosystem.config.js'
    );
}