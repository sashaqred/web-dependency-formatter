import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { DependencyRedactor } from '../DependencyRedactor';
import { DependencySelector } from '../DependencySelector';

export function DependencyFormatter() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/upload`}>
        <DependencySelector />
      </Route>
      <Route exact path={`${path}/format`}>
        <DependencyRedactor />
      </Route>
      <Redirect to={`${path}/upload`} />
    </Switch>
  );
}
