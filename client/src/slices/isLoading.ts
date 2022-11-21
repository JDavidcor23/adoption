import { createSlice } from "@reduxjs/toolkit";

export const isLoading = createSlice({
  name: "isLoading",
  initialState: {
    data: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setIsLoading } = isLoading.actions;

export default isLoading.reducer;
