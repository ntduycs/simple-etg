import { Router } from "express";
import helloController from "@controllers/hello.controller";

const rootController = Router();

rootController.use("/hello", helloController);

export default rootController;
