import { configureStore } from '@reduxjs/toolkit'
import vikasSlice from './vikasSlice';

export const store = configureStore({
  reducer: {
    home:vikasSlice,
  },
});