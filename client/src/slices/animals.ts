import { createSlice } from "@reduxjs/toolkit";

export const animalsSlice = createSlice({
  name: "animals",
  initialState: {
    data: [],
  },
  reducers: {
    setAnimalsSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setAnimalsSlice } = animalsSlice.actions;

export default animalsSlice.reducer;
