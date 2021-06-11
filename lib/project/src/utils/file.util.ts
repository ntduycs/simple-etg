import fs from "fs-extra";
import childProcess, { ExecException } from "child_process";
import logger from "@utils/logger.util";

function remove(dir: string): Promise<void> {
  return new Promise((resolve, reject) => {
    return fs.remove(dir, (err: Error) => {
      return err ? reject(err) : resolve();
    });
  });
}

function copy(src: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    return fs.copy(src, dest, (err: Error) => {
      return err ? reject(err) : resolve();
    });
  });
}

function exec(cmd: string, loc: string): Promise<void> {
  return new Promise((resolve, reject) => {
    return childProcess.exec(cmd, { cwd: loc }, (err: ExecException | null, stdout: string, stderr: string) => {
      if (stdout) {
        logger.info(stdout);
      }
      if (stderr) {
        logger.warn(stderr);
      }
      return err ? reject(err) : resolve();
    });
  });
}

export default {
  remove,
  copy,
  exec,
};
