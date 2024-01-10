import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import bankReducer from "./slices/bankSlice";
import stockReducer from "./slices/stockSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["authSlice", "bankSlice"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    authReducer,
    bankReducer,
    stockReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
