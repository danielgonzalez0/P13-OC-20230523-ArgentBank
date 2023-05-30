import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: null
  ,
  reducers: {
    addToken: (state, action) => {
        const token = action.payload
      return state= token;
    },

    deleteToken: (state) => {
      return state = null;
    },
  },
});

export const { addToken, deleteToken } = tokenSlice.actions;

export default tokenSlice.reducer;
