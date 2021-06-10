import { Request, Response, Router } from "express";

const helloController = Router();

helloController.get("/", hello);

async function hello(req: Request, res: Response): Promise<void> {
  res.status(200).json({
    message: "Hello World!!!",
  });
}

export default helloController;
