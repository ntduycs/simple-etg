const path = require("path");
const childProcess = require("child_process");
const ncp = require("ncp").ncp;
const editJsonFile = require("edit-json-file");

async function generate(dest, useYarn) {
  try {
    await copyProjectFiles(dest);
    renameProject(dest);
    installDependencies(dest, getDependencies(), useYarn);
  } catch (err) {
    console.error(err);
  }
}

function copyProjectFiles(dest) {
  const projectDir = "./project";
  const src = path.join(__dirname, projectDir);

  return new Promise((resolve, reject) => {
    ncp.limit = 16;
    ncp(src, dest, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  })
}

function renameProject(dest) {
  const file = editJsonFile(dest + "/package.json", {
    autosave: true,
  });
  file.set("name", path.basename(dest));
}

function getDependencies() {
  const dependencies = [
    "axios",
    "command-line-args",
    "compression",
    "cookie-parser",
    "dotenv",
    "express",
    "express-async-errors",
    "helmet",
    "http-status-codes",
    "jet-logger",
    "jsonfile", // Easily read/write JSON files in Node.js
    "jsonwebtoken",
    "module-alias",
    "morgan",
    "uuid",
  ];
  const devDependencies = [
    "@babel/core",
    "@types/command-line-args",
    "@types/compression",
    "@types/cookie-parser",
    "@types/express",
    "@types/fs-extra",
    "@types/jsonfile",
    "@types/jsonwebtoken",
    "@types/morgan",
    "@types/node",
    "@types/uuid",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser",
    "eslint",
    "eslint-config-prettier",
    "eslint-plugin-prettier",
    "fs-extra",
    "nodemon",
    "npm-run-all",
    "prettier",
    "ts-loader",
    "ts-node",
    "tsconfig-paths",
    "typescript",
    "webpack",
    "webpack-cli",
    "webpack-node-externals",
  ];

  return {
    dependencies: dependencies.join(" "),
    devDependencies: devDependencies.join(" "),
  };
}

function installDependencies(dest, dependencyStrings, useYarn) {
  const options = {
    cwd: dest,
  };

  let downloadLibCmd, downloadDevLibCmd;
  if (useYarn) {
    downloadLibCmd = `yarn add ${dependencyStrings.dependencies}`;
    downloadDevLibCmd = `yarn add -D ${dependencyStrings.devDependencies}`
  } else {
    downloadLibCmd = `npm i -s ${dependencyStrings.dependencies}`;
    downloadDevLibCmd = `npm i -D ${dependencyStrings.devDependencies}`;
  }

  childProcess.exec(downloadLibCmd, options);
  childProcess.exec(downloadDevLibCmd, options);
}

module.exports = generate;