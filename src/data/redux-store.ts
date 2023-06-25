import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import basketReducer from "./slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: " agenda",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
