import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './budgetSlice';

const budgetStore = configureStore({
  reducer: {
    budget: budgetReducer,
  },
});

export default budgetStore;
