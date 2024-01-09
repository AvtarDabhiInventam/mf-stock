const { configureStore, combineReducers } = require("@reduxjs/toolkit");
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import bankReducer from "./slices/bankSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authSlice"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    authReducer,
    bankReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
