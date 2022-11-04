import { ANIMALS } from "../api";
import { createSlice } from "@reduxjs/toolkit";

export const animalsSlice = createSlice({
  name: "animals",
  initialState: {
    data: [...ANIMALS],
  },
  reducers: {
    setAnimalsSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setAnimalsSlice } = animalsSlice.actions;

export default animalsSlice.reducer;
