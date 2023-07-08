import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { addInfo, addExp, addEdu } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { addInfo, addExp, addEdu, store };
