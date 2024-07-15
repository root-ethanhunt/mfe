import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const marketingStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
})