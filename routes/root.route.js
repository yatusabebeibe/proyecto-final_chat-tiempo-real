import { Router } from "express";
import { RootController } from "../controller/root.controller.js";

const controller = new RootController();

export const rootRouter = () => {
  const router = Router();

  router.route( "/" )
    .get( controller.getRoot )
  ;

  return router;
};