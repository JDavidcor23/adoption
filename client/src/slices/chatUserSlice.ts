import { createSlice } from "@reduxjs/toolkit";

export const chatUserSlice = createSlice({
  name: "chatUser",
  initialState: {
    data: {
      email: "juan_jesus@gmail.com",
      profileName: "Juan Jesus",
      profilePhoto:
        "https://res.cloudinary.com/dbtk64lp4/image/upload/v1667680854/2.0/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e_gstksx.jpg",
      uuid: "33861e08-63a5-11ed-81ce-0242ac120002",
    },
  },
  reducers: {
    setChatUserSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setChatUserSlice } = chatUserSlice.actions;

export default chatUserSlice.reducer;
