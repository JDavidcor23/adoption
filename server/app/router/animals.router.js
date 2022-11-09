import express from "express";
import { ANIMALS } from "../data/index.js";

const router = express.Router();

router.get("/", async (request, response, next) => {
  try {
    response.json(ANIMALS);
  } catch (error) {
    throw new Error(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const animal = ANIMALS.find((pet) => pet.id === id);
    response.json(animal);
  } catch (error) {
    throw new Error(error);
  }
});

export { router };
