import React, { Suspense, lazy } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

const DependencyRedactor = lazy(() => import('../DependencyRedactor'));
const DependencySelector = lazy(() => import('../DependencySelector'));

export function DependencyFormatter() {
  const { path } = useRouteMatch();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={`${path}/upload`}>
          <DependencySelector />
        </Route>
        <Route exact path={`${path}/format`}>
          <DependencyRedactor />
        </Route>
        <Redirect to={`${path}/upload`} />
      </Switch>
    </Suspense>
  );
}
