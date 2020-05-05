import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { recieveDependencies } from '../../actions';
import { FileSelector } from '../../components';

export function DependencySelector() {
  const history = useHistory();
  const dispatch = useDispatch();

  const uploadCallback = useCallback(
    (nextDependencies) => {
      dispatch(recieveDependencies(nextDependencies));
      history.push('/format');
    },
    [history, dispatch],
  );

  return <FileSelector onFileLoaded={uploadCallback} />;
}
