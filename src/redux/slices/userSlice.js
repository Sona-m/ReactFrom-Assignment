import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { info: "", education: "", experience: "" },
  reducers: {
    addInfo(state, action) {
      state.info = action.payload;
    },
    addExp(state, action) {
      state.experience = action.payload;
    },
    addEdu(state, action) {
      state.education = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addInfo, addEdu, addExp } = userSlice.actions;
