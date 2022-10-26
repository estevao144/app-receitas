import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
import renderWithRouter from './helpers/renderWithRouter';
import Provider from '../context/Provider';

describe('testando Footer component', () => {
  test('Testando se os icones sao renderizados', () => {
    renderWithRouter(
      <Provider>
        <Profile />
      </Provider>,
    );

    const footer = screen.getByTestId(/footer/i);
    const mealIcon = screen.getByTestId(/meals-bottom-btn/i);
    const drinkIcon = screen.getByTestId(/drinks-bottom-btn/i);

    expect(footer).toBeInTheDocument();
    expect(mealIcon).toBeInTheDocument();
    expect(drinkIcon).toBeInTheDocument();
  });

  test('Testando se os icones encaminham para pagina de drink', () => {
    const { history } = renderWithRouter(
      <Provider>
        <Profile />
      </Provider>,
    );

    const drinkIcon = screen.getByTestId(/drinks-bottom-btn/i);

    userEvent.click(drinkIcon);

    expect(history.location.pathname).toBe('/drinks');
  });

  test('Testando se os icones encaminham para pagina de drink', () => {
    const { history } = renderWithRouter(
      <Provider>
        <Profile />
      </Provider>,
    );

    const mealIcon = screen.getByTestId(/meals-bottom-btn/i);
    userEvent.click(mealIcon);

    expect(history.location.pathname).toBe('/meals');
  });
});
