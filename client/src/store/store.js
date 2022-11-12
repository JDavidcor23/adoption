import animals from "../slices/animals";
import IsLoggedIn from "../slices/IsLoggedIn";
import detailAnimal from "../slices/detailAnimal";
import favoriteAnimals from "../slices/favoriteAnimals";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    animals,
    IsLoggedIn,
    detailAnimal,
    favoriteAnimals,
  },
});
