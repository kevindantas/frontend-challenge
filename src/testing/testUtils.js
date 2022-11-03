import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getStore, store } from '../app/store';

export function renderWithProviders(
  ui,
  { preloadedState = {}, ...renderOptions } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={getStore(preloadedState)}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  return {
    store,
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export * from '@testing-library/react';
