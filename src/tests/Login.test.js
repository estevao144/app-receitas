import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import Provider from '../context/Provider';

describe('Testes Login', () => {
  test('Verifica se os inputs são renderizados', () => {
    const { history: { location } } = renderWithRouter(<Provider><Login /></Provider>);

    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(location.pathname).toBe('/');
  });

  test('Verifica se o botão esta desabilitado', () => {
    const { history } = renderWithRouter(<Provider><App /></Provider>);

    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    userEvent.type(email, 'emailValido@outlook.com');
    userEvent.type(password, '1234567');
    userEvent.click(button);
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
  });
});
