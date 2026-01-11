import express from "express";
import { router } from "./routes/index.routes";

export const createApp = () => {
  const app = express();

  app.use( express.json() );
  app.use( router() );

  return app;
};
