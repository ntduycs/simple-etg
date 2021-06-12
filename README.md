# Simple ETG - Express Typescript Generator

===================

[![npm Package](https://img.shields.io/npm/v/simple-etg.svg?style=flat-square)](https://www.npmjs.org/package/simple-etg)
[![build status](https://secure.travis-ci.org/jprichardson/simple-etg.svg)](http://travis-ci.org/jprichardson/node-jsonfile)
[![windows Build status](https://img.shields.io/appveyor/build/jprichardson/simple-etg/master.svg?label=windows%20build)](https://ci.appveyor.com/project/jprichardson/node-jsonfile/branch/master)

## :cloud: Quick Start
The quickest way to get started is use npx and pass in the name of the project you want to create. If you don't specify a project name, the default `simple-etg` will be used instead. If you want to use yarn instead of npm, pass the option `--useYarn`.

```shell
npx simple-etg [--dest=<project-name>] [--useYarn]
```

Example:
```shell
npx simple-etg --dest=my-project --useYarn
npm simple-etg -d my-project -y
```

The process will take about 1-2 minutes. After that, your project is in ready-to-start. Start your Express app in development mode by using:

```shell
cd "<project-name>" && npm run start
```

Example:
```shell
# Using npm
cd my-project && npm run start
# Using yarn
cd my-project && yarn start
```

## :clipboard: Available Commands

- `start` - Run the server in development mode
- `build` - Bundle the project using webpack
- `serve` - Run the server in production mode
- `lint` - Run linters (`prettier` and `eslint`) sequentially and autofix fixable errors if any
- `lint:check` - Run linters (`prettier` and `eslint`) sequentially and reports errors if any


Thanks! :heart: