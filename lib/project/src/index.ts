import "./pre-start";
import app from "./app";
import logger from "@utils/logger.util";
import fs from "fs";
import https from "https";

const port = Number(process.env.SERVER_PORT || 3000);
const env = process.env.NODE_ENV || "development";

if (env !== "production") {
  app.listen(port, () => {
    logger.imp("=".repeat(30));
    logger.imp(`Express is running on port ${port}\n`);
  });
} else {
  const credentials = {
    key: fs.readFileSync("path/to/key"),
    cert: fs.readFileSync("path/to/cert"),
  };

  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(port, () => {
    logger.imp("=".repeat(30));
    logger.imp(`Express is running on port ${port} with mode\n`);
  });
}
