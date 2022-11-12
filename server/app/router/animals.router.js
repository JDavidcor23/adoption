import express from "express";
import { nameRoutes } from "../constants/index.js";
import ANIMALS from "../data/animalsData.json" assert { type: "json" };

const router = express.Router();

router.get(nameRoutes.DEFAULT, async (request, response) => {
  try {
    response.json(
      ANIMALS.map((animal) => {
        return {
          id: animal.id,
          img: animal.img,
          name: animal.name,
          race: animal.race,
          type: animal.type,
        };
      })
    );
  } catch (error) {
    throw new Error(error);
  }
});

router.get(nameRoutes.DEFAULT_ID, async (request, response) => {
  try {
    const { id } = request.params;
    const animal = ANIMALS.find((pet) => pet.id === id);
    response.status(200).json(animal);
  } catch (error) {
    throw new Error(error);
  }
});
export { router };
