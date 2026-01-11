import { Router } from "express";
import { rootRouter } from "./root.route.js";

export const router = () => {
  const router = Router();

  router.use( "/", rootRouter() );

  return router;
};