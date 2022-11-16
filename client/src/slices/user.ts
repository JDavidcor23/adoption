import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
  },
  reducers: {
    setUserSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUserSlice } = userSlice.actions;

export default userSlice.reducer;
