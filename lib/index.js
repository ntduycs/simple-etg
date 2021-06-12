#!/usr/bin/env node

const path = require("path");
const generate = require("./generator");
const commandLineArgs = require("command-line-args");

(() => {
  console.log("Generating new Express (with Typescript) project...");

  const args = commandLineArgs([
    {
      name: "useYarn",
      alias: "y",
      defaultValue: false,
      type: Boolean,
    }, {
      name: "dest",
      alias: "d",
      defaultValue: "simple-etg",
      type: String,
    },
  ]);

  const dest = path.join(process.cwd(), args.dest);
  const useYarn = args.useYarn;

  generate(dest, useYarn).then(() => {
    console.log("Done! Happy coding!!!");
  });
})();