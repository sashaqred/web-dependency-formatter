import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DependencyFormatter } from '@modules/DependencyFormatter';

export function AppRouter() {
  return (
    <BrowserRouter>
      <DependencyFormatter />
    </BrowserRouter>
  );
}
