import { createSlice } from "@reduxjs/toolkit";

export const favoriteAnimalsSlice = createSlice({
  name: "favoriteAnimals",
  initialState: {
    data: [],
  },
  reducers: {
    setFavoriteAnimalsSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFavoriteAnimalsSlice } = favoriteAnimalsSlice.actions;

export default favoriteAnimalsSlice.reducer;
