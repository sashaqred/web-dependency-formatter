import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import {
  dependencyFormatterReducer,
  DEPENDENCY_FORMATTER_SLICE_NAME,
} from '@modules/DependencyFormatter/setupApi';

export const rootReducer = combineReducers({
  [DEPENDENCY_FORMATTER_SLICE_NAME]: dependencyFormatterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
