import React from "react";
import { Provider } from "react-redux";
import { store } from "../stores/index";
import {marketingStore} from "order/marketingStore"


// const storeObj ={...store , ...marketingStore};
// console.log("stoteObj",storeObj)
// console.log("marketingStore",marketingStore)

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

