import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@modules/App/root';
import { DEPENDENCY_FORMATTER_SLICE_NAME } from './slice';

export function depedencyFormatterSelector(state: RootState) {
  return state[DEPENDENCY_FORMATTER_SLICE_NAME];
}

export const selectDependencies = createSelector(
  depedencyFormatterSelector,
  (depedencyFormatter) => depedencyFormatter.dependencies,
);
