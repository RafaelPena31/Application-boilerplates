/**
 * @author Rafael Pena
 *
 * Github: @RafaelPena31
 * LinkedIn: https://www.linkedin.com/in/rafael-augusto-pena/
 *
 * @tutorial
 * TO-DOs
 * Change the _Feature_Name_Model interface and the return of each role service according to your needs
 */

import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer from "./reducer";

const persistConfig = {
  key: "rootReduxStore",
  storage: AsyncStorage,
  whitelist: ["_Feature_Name_"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware))
);
const persistor = persistStore(store);

export default { store, persistor };
