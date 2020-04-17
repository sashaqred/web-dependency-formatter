import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { DependencyFormatter } from './DependencyFormatter';

export function AppRouting() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path="/" to="/dependency-formatter" />
        <Route path="/dependency-formatter">
          <DependencyFormatter />
        </Route>
        <Redirect path="*" to="/dependency-formatter" />
      </Switch>
    </BrowserRouter>
  );
}
