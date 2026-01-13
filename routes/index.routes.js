import { Router } from "express";
import { rootRouter } from "./root.route.js";

export const router = () => {
  const router = Router();

  router.use( "/", rootRouter() );

  // Si no se encuentra la ruta, renderizar la página 404
  router.use( ( req, res ) => res.status( 404 ).render( "404" ) );

  return router;
};