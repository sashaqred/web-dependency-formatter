import { configureStore, combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
