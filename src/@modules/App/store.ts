import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  dependencyFormatterReducer,
  DEPENDENCY_FORMATTER_SLICE_NAME,
} from '@modules/DependencyFormatter';

export const rootReducer = combineReducers({
  [DEPENDENCY_FORMATTER_SLICE_NAME]: dependencyFormatterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
