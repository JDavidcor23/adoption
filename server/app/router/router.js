import express from "express";
import { router as routerAnimal } from "./animals.router.js";

export function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/animals", routerAnimal);
}
