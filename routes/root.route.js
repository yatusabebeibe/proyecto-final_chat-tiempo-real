import { Router } from "express";

export const rootRouter = () => {
  const router = Router();

  router.route( "/" )
    .get( ( req, res ) => {
      res.json( "Hello, World!" );
    })
  ;

  return router;
};