"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import configureAppStore from "@store/index";

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // console.log(configureAppStore)
    storeRef.current = configureAppStore();

    // use features for data initialization
    // storeRef.current.dispatch(initializeCount(count))
  };

  return <Provider store={storeRef.current}>{children}</Provider>
};
