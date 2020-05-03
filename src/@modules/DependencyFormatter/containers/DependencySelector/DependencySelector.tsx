import React, { useCallback } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { recieveDependencies } from '../../actions';
import { FileSelector } from '../../components';

export function DependencySelector() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();

  const uploadCallback = useCallback(
    (nextDependencies) => {
      dispatch(recieveDependencies(nextDependencies));
      history.push(`${url}/format`);
    },
    [url, history, dispatch],
  );

  return <FileSelector onFileLoaded={uploadCallback} />;
}
