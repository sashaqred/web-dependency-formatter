import React, { useCallback } from 'react';
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FileSelector } from '../../components';
import { setDependencies } from '../../slice';
import { DependencyRedactor } from '../DependencyRedactor';

export function DependencyFormatter() {
  const { path } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();

  const uploadCallback = useCallback(
    (nextDependencies) => {
      dispatch(setDependencies(nextDependencies));
      history.push(`${path}/format`);
    },
    [path, history, dispatch],
  );

  return (
    <Switch>
      <Route path={`${path}/upload`}>
        <FileSelector onFileLoaded={uploadCallback} />
      </Route>
      <Route exact path={`${path}/format`}>
        <DependencyRedactor />
      </Route>
      <Redirect to={`${path}/upload`} />
    </Switch>
  );
}
