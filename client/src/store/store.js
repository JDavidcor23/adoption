import user from "../slices/user";
import animals from "../slices/animals";
import isLoading from "../slices/isLoading";
import IsLoggedIn from "../slices/IsLoggedIn";
import chatUser from "../slices/chatUserSlice";
import detailAnimal from "../slices/detailAnimal";
import favoriteAnimals from "../slices/favoriteAnimals";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user,
    animals,
    chatUser,
    isLoading,
    IsLoggedIn,
    detailAnimal,
    favoriteAnimals,
  },
});
