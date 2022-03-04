require("dotenv").config();
module.exports = (shipit) => {
  require("shipit-deploy")(shipit);
  require("shipit-shared")(shipit);

  const appName = "app-automacao";

  shipit.initConfig({
    default: {
      deployTo: "/home/x900l/app-automacao/dist",
      repositoryUrl: process.env.REPOSITORY_URL,
      keepReleases: 5,
      shared: {
        overwrite: true,
        dirs: ["node_modules"],
      },
    },
    production: {
      servers: process.env.SSH_SERVER,
    },
  });

  // const path = require("path");
  // const ecosystemFilePath = path.join(
  //   shipit.config.deployTo,
  //   "shared",
  //   "ecosystem.config.js"
  // );

//   shipit.on("updated", () => {
//     shipit.start("npm-install", "copy-config");
//   });

//   shipit.on("published", () => {
//     shipit.start("pm2-server");
//   });

//   shipit.blTask("copy-config", async () => {
//     const fs = require("fs");

//     const ecosystem = `
// module.exports = {
//   apps: [
//     {
//       name: "app-automacao",
//       script:
//         "/home/x900l/app-automacao/dist/releases/20220304153811/dist/server.js",
//       watch: true,
//       autorestart: true,
//       restart_delay: 1000,
//       env: {
//         NODE_ENV: "development",
//       },
//       env_production: {
//         NODE_ENV: "production",
//       },
//     },
//   ],
// };
// `;

//     fs.writeFileSync("ecosystem.config.js", ecosystem, function (err) {
//       if (err) throw err;
//       console.log("File created successfully.");
//     });

//     await shipit.copyToRemote("ecosystem.config.js", ecosystemFilePath);
//   });

//   shipit.blTask("npm-install", async () => {
//     shipit.remote(`cd ${shipit.releasePath} && npm install --production`);
//   });

//   shipit.blTask("pm2-server", async () => {
//     await shipit.remote(`pm2 delete -s ${appName} || :`);
//     await shipit.remote(
//       `pm2 start ${ecosystemFilePath} --env production --watch true`
//     );
//   });
};
