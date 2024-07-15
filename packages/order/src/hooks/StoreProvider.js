import React from "react";
import { Provider } from "react-redux";
import { marketingStore } from "../stores/index";


console.log("marketingStore",marketingStore)

export default function ReduxProvider({ children }) {
  return <Provider store={marketingStore}>{children}</Provider>;
}

