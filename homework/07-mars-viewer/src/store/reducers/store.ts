import { combineReducers } from '@reduxjs/toolkit';
import marsReducer from './Mars_Slice';

const rootReducer = combineReducers({
  Counter: marsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
