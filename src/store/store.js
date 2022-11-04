import { configureStore } from "@reduxjs/toolkit";
import IsLoggedIn from "../slices/IsLoggedIn";
import animals from "../slices/animals";

export const store = configureStore({
  reducer: {
    animals,
    IsLoggedIn,
  },
});
