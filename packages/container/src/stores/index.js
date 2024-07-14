import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import marketingSlice from 'marketing/marketingSlice'
import {marketingStore} from "marketing/marketingStore"

export const store = configureStore({
  reducer: {
    counter1: marketingSlice,
    counter: counterReducer,
  },
})