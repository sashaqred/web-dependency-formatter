import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routes';
import { store } from './store';
import { AppStyles } from './styles';

export function App() {
  return (
    <Provider store={store}>
      <AppStyles>
        <AppRouter />
      </AppStyles>
    </Provider>
  );
}
