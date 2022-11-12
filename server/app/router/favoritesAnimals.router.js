import express from "express";
import { nameRoutes } from "../constants/index.js";
import FAVORITES_ANIMALS from "../data/favoritesAnimals.json" assert { type: "json" };
import _ from "underscore";

const router = express.Router();

router.get(nameRoutes.DEFAULT, async (request, response) => {
  try {
    response.status(200).json(FAVORITES_ANIMALS);
  } catch (error) {
    throw new Error(error);
  }
});

router.post(nameRoutes.DEFAULT, async (request, response) => {
  try {
    const body = request.body;
    const isTheAnimalInFavorites = FAVORITES_ANIMALS.some(
      (animal) => animal.id === body.id
    );
    if (!isTheAnimalInFavorites) {
      FAVORITES_ANIMALS.push(body);
    }
    response.status(200).json({ resp: "Saved" });
  } catch (error) {
    throw new Error(error);
  }
});

router.delete(nameRoutes.DEFAULT, (request, response) => {
  const { id } = request.params;
  _.each(FAVORITES_ANIMALS, (d, i) => {
    if (d.id == id) {
      data.splice(i, 1);
    }
  });

  response.json(FAVORITES_ANIMALS);
});

export { router };
