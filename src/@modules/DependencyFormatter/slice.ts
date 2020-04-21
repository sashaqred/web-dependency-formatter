import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dependency } from './models';

export interface DependencyFormatterState {
  dependencies: Record<string, Dependency>;
}

interface SetDependenciesPayload {
  dependencies: Record<string, string>;
}

const initialState: DependencyFormatterState = {
  dependencies: {},
};

export const DEPENDENCY_FORMATTER_SLICE_NAME = 'dependencyFormatter';

const dependencyFormatterSlice = createSlice({
  name: DEPENDENCY_FORMATTER_SLICE_NAME,
  initialState,
  reducers: {
    setDependencies(sliceState, action: PayloadAction<SetDependenciesPayload>) {
      const dependencies = Object.entries(action.payload.dependencies).reduce(
        (map, [name, currentVersion]) => ({ ...map, [name]: { name, currentVersion } }),
        {} as Record<string, Dependency>,
      );
      sliceState.dependencies = dependencies;
    },
    removeDependencies(sliceState) {
      sliceState.dependencies = {};
    },
  },
});
export const { actions } = dependencyFormatterSlice;

export const dependencyFormatterReducer = dependencyFormatterSlice.reducer;
