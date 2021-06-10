import express, { json, urlencoded, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import path from "path";
import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import logger from "./utils/logger.util";
import controllers from "./controllers";

const { BAD_REQUEST } = StatusCodes;

const app = express();

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));

const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
  app.use(compression());
}

app.use("/", controllers);
/* eslint-disable  @typescript-eslint/no-unused-vars */
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  logger.err(err, true);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

export default app;
