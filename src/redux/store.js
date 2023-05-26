import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tokenSlice from './token.slice';
import userSlice from './user.slice';

const rootReducer = combineReducers({
  token: tokenSlice,
  user: userSlice,
});

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
