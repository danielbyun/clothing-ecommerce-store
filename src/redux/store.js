import { compose, createStore, applyMiddleware } from "redux";

// cache the store
import { persistStore } from "redux-persist";

// redux logger (shows all the logs on the console)
import logger from "redux-logger";

import rootReducer from "./reducer/rootReducer";

// middleware is an arrary
const middlewares = [logger];

// put rootReducer and get all the methods from the array
// technically don't need to export
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);

export default { store, persistStore };
