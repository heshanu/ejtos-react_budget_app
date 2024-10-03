import { configureStore } from '@reduxjs/toolkit';
import NameReducer from './nameSlice';

const NameStore = configureStore({
  reducer: {
    username: NameReducer,
  },
});

export default NameStore;
