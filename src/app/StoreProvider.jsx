"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import configureAppStore, { thunkAuthenticate } from "../lib/store/index";

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = configureAppStore();

    // use features for data initialization
    storeRef.current.dispatch(thunkAuthenticate());
  };

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider >
  )
};
