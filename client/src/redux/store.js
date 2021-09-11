import {compose, createStore, applyMiddleware} from "redux";

// cache the store
import {persistStore} from "redux-persist";

// redux logger (shows all the logs on the console)
import logger from "redux-logger";

// redux-thunk that lets redux fire functions
// import thunk from "redux-thunk";

import rootReducer from "./reducer/rootReducer";

// redux-saga
import createSagaMiddleware from "redux-saga";
import rootSagas from "./saga/rootSagas";

const sagaMiddleware = createSagaMiddleware();

// middleware is an array
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// put rootReducer and get all the methods from the array
// technically don't need to export
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

// TODO: run this after writing saga code
sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);

export default {store, persistStore};
