import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const DependencyRedactor = lazy(() => import('../DependencyRedactor'));
const DependencySelector = lazy(() => import('../DependencySelector'));

export function DependencyFormatter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/upload">
          <DependencySelector />
        </Route>
        <Route exact path="/format">
          <DependencyRedactor />
        </Route>
        <Redirect to="/upload" />
      </Switch>
    </Suspense>
  );
}
