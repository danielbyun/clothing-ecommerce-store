// actual code that combines all the state together
// break the code up to individual sections
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// localStorage object
import storage from "redux-persist/lib/storage";

import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import directoryReducer from "./directoryReducer";
import shopReducer from "./shopReducer";

// how to tell the persistReducer to store our state
const persistConfig = {
  key: "root",
  storage,
  // array containing the string names of any of the reducer that we want to store
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
