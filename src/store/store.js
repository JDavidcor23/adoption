import { configureStore } from "@reduxjs/toolkit";
import IsLoggedIn from "../slices/IsLoggedIn";

export const store = configureStore({
  reducer: {
    IsLoggedIn,
  },
});
