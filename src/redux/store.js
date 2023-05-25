import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tokenSlice from './token.slice';

const rootReducer = combineReducers({
  token: tokenSlice,
});

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
