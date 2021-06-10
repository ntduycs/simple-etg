import commandLineArgs from "command-line-args";
import dotenv from "dotenv";
import logger from "@utils/logger.util";
import { KeyValue } from "@de/dtos/keyval.dto";
import path from "path";

const cmdArgsDefinitions = [
  {
    name: "env",
    defaultValue: "development",
    type: String,
  },
];

function parseCmdArguments() {
  const cmdArgs = commandLineArgs(cmdArgsDefinitions);

  validateCmdArguments(cmdArgs);
  processCmdArguments(cmdArgs);

  return cmdArgs;
}

function validateCmdArguments(cmdArgs: KeyValue): void {
  // TODO: Validate args (required, types, etc.)
}

function processCmdArguments(cmdArgs: KeyValue): void {
  // TODO: Do something with these args
}

function loadEnvironmentVariables(cmdArgs: KeyValue) {
  logger.imp(`Loading environment variables on mode ${cmdArgs.env}`);

  // Loads environment variables
  const vars = dotenv.config({
    debug: cmdArgs.env !== "production",
    path: `${path.join(__dirname, "..")}/.env.${cmdArgs.env}`,
  });

  if (vars.error) {
    throw vars.error;
  }

  if (cmdArgs.env !== "production") {
    logger.info(`Loaded environment variables are: \n${JSON.stringify(vars.parsed, null, 2)}`);
  }
}

(() => {
  const cmdArgs = parseCmdArguments();
  loadEnvironmentVariables(cmdArgs);
})();
