// store.js
import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './budgetSlice';
import nameReducer from './nameSlice';

const store = configureStore({
  reducer: {
    username: nameReducer,
    budget: budgetReducer,
  },
});

export default store;
