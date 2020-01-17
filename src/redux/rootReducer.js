// actual code that combines all the state together
// break the code up to individual sections

import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

export default combineReducers({
  user: userReducer
});
