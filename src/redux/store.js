import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

// middleware is an arrary
const middlewares = [logger];

// put rootReducer and get all the methods from the array
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export default store;
