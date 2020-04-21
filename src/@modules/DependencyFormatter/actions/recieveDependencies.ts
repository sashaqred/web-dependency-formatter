import { AppThunk } from '@modules/App/root';
import { setDependencies, updateDependencyLatesVersion } from './sliceActions';

interface RecieveDependenciesPayload {
  dependencies: Record<string, string>;
}

export function recieveDependencies({ dependencies }: RecieveDependenciesPayload): AppThunk {
  return (dispatch) => {
    dispatch(setDependencies({ dependencies }));
    Object.keys(dependencies).forEach(async (name) => {
      const response = await fetch(`/api/npm/${name}`);
      const data = await response.json();
      const latestVersion = data?.['dist-tags']?.latest;
      if (latestVersion) {
        dispatch(
          updateDependencyLatesVersion({
            name,
            latestVersion,
          }),
        );
      }
    });
  };
}
