import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import likedImagesReducer from "./reducers/likedImages";

export const store = configureStore({
  reducer: {
    user: userReducer,
    likedImages: likedImagesReducer,
  },
});
