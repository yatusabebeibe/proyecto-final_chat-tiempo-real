import express from "express";
import { router } from "./routes/index.routes.js";

export const createApp = () => {
  const app = express();

  app.disable( "x-powered-by" );

  app.use( express.json() );
  app.set( "view engine", "ejs" );
  app.set( "views", "./views" );
  app.use( router() );

  return app;
};
