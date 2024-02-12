import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import sessionReducer from './session.js';

const rootReducer = combineReducers({
  session: sessionReducer
});

const configureAppStore = () => {
  return configureStore({
    reducer: rootReducer,
    // for serializable error
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: process.env.NODE_ENV !== 'production'
  });
};

export default configureAppStore;
