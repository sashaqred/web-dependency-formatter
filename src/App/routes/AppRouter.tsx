import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { DependencyFormatter } from '../../DependencyFormatter';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dependency-formatter">
          <DependencyFormatter />
        </Route>
        <Redirect to="/dependency-formatter" />
      </Switch>
    </BrowserRouter>
  );
}
