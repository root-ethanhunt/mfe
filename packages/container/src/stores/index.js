import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import marketingSlice from 'order/marketingSlice'
// import {marketingStore} from "order/marketingStore"

export const store = configureStore({
  reducer: {
    counter1: marketingSlice,
    counter: counterReducer,
  },
})