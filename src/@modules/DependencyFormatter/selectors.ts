import { createSelector } from '@reduxjs/toolkit';
import { DEPENDENCY_FORMATTER_SLICE_NAME, DependencyFormatterState } from './slice';

type FeatureState = {
  [DEPENDENCY_FORMATTER_SLICE_NAME]: DependencyFormatterState;
};

export function depedencyFormatterSelector(state: FeatureState) {
  return state[DEPENDENCY_FORMATTER_SLICE_NAME];
}

export const selectDependencies = createSelector(
  depedencyFormatterSelector,
  (depedencyFormatter) => depedencyFormatter.dependencies,
);
