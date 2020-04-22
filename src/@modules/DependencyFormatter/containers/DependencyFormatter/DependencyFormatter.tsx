import React, { useCallback } from 'react';
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FileSelector } from '../../components';
import { recieveDependencies } from '../../actions';
import { DependencyRedactor } from '../DependencyRedactor';

export function DependencyFormatter() {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();

  const uploadCallback = useCallback(
    (nextDependencies) => {
      dispatch(recieveDependencies(nextDependencies));
      history.push(`${url}/format`);
    },
    [url, history, dispatch],
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
