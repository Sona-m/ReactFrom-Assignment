import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { addInfo, addExp, addEdu } from "./slices/userSlice";
import { navigationReducer } from "./slices/navigationSlice";
import { navigate } from "./slices/navigationSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationReducer,
  },
});

export { addInfo, addExp, addEdu, store };
export {navigate};