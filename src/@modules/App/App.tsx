import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routes';
import { store } from './store';
import { AppStyles } from './styles';
import { AppErrors } from './containers';

export function App() {
  return (
    <AppErrors>
      <Provider store={store}>
        <AppStyles>
          <AppRouter />
        </AppStyles>
      </Provider>
    </AppErrors>
  );
}
