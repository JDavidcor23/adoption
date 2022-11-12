import { createSlice } from "@reduxjs/toolkit";

export const detailAnimalSlice = createSlice({
  name: "detailAnimal",
  initialState: {
    data: {},
  },
  reducers: {
    setDetailAnimalSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setDetailAnimalSlice } = detailAnimalSlice.actions;

export default detailAnimalSlice.reducer;
