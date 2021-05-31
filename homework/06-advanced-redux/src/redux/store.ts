import { createStore, compose, applyMiddleware} from "redux";
import combineReducers from "./reducers";
import thunk from 'redux-thunk';
import {logger} from './logger';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers, undefined, composeEnhancers(applyMiddleware(logger, thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;