import { Response, Router } from "express";

export const routes = Router();

routes.get("/", (_, res: Response) => {
  res.status(204).send();
});
