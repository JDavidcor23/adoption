import animals from "../slices/animals";
import IsLoggedIn from "../slices/IsLoggedIn";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    animals,
    IsLoggedIn,
  },
});
