import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DependencyFormatterState {
  dependencies: Record<string, string>;
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
      sliceState.dependencies = action.payload.dependencies;
    },
    removeDependencies(sliceState) {
      sliceState.dependencies = {};
    },
  },
});
export const { actions } = dependencyFormatterSlice;

export const dependencyFormatterReducer = dependencyFormatterSlice.reducer;
