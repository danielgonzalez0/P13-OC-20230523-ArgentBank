import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    getUser: (state, action) => {
      return (state = {
        id: action.payload.id,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      });
    },
    updateUserName: (state, action) => {
      return (state = {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      });
    },
    clearUser: (state) => {
      return (state = {
        id: null,
        email: null,
        firstName: null,
        lastName: null,
      });
    },
  },
});

export const { getUser, updateUserName, clearUser } = userSlice.actions;

export default userSlice.reducer;
