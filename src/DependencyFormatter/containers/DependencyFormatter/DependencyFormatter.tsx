import React, { useCallback } from 'react';
import { Switch, Route, useRouteMatch, Redirect, useHistory } from 'react-router-dom';
import { FileSelector } from '../../components';

export function DependencyFormatter() {
  const { path } = useRouteMatch();
  const history = useHistory();

  const uploadCallback = useCallback(() => {
    history.push(`${path}/format`);
  }, [path, history]);

  return (
    <Switch>
      <Redirect exact path={path} to={`${path}/upload`} />
      <Route path={`${path}/upload`}>
        <FileSelector onFileLoaded={uploadCallback} />
      </Route>
      <Route exact path={`${path}/format`}>
        <h1>Format uploaded file</h1>
      </Route>
      <Redirect path={`${path}/*`} to={`${path}/upload`} />
    </Switch>
  );
}
