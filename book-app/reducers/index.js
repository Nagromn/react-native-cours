import { combineReducers } from "redux";
import { userReducer } from "./user";
import likedImagesReducer from "./likedImages";

const rootReducer = combineReducers({
  userReducer,
  likedImagesReducer,
});

export default rootReducer;
