"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import configureAppStore, { thunkAuthenticate } from "../lib/store/index";
import { SessionProvider } from "next-auth/react";

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  let sessionState = null;
  if (!storeRef.current) {
    storeRef.current = configureAppStore();

    // use features for data initialization
    storeRef.current.dispatch(thunkAuthenticate())

    sessionState = storeRef.current.getState().session;
  };


  return (
    <Provider store={storeRef.current}>
      <SessionProvider session={sessionState}>

        {children}
      </SessionProvider >

    </Provider >
  )
};
