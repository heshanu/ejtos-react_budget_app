import { createSlice } from '@reduxjs/toolkit';

const NameSlice = createSlice({
  name: 'username',
  initialState: {
    username:"Heshan"
  },
  reducers: {
    changeUsername: (state, action) => {
        state.username=action.payload;
    }
  }
});

export const {changeUsername } = NameSlice.actions;

export default NameSlice.reducer;
