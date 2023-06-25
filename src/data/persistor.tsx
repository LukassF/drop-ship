"use client";

import { store } from "@/data/redux-store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ReactNode } from "react";

let persistor = persistStore(store);

export function ReduxPersistor({ children }: { children: ReactNode }) {
  return <PersistGate persistor={persistor}>{children}</PersistGate>;
}
