import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testes Recipes', () => {
  it('Testa se o os botões de filtro são renderizados', () => {
    const { history } = renderWithRouter(<App />);

    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    userEvent.type(email, 'emailValido@outlook.com');
    userEvent.type(password, '1234567');
    userEvent.click(button);
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');

    const profileBtn = screen.getByTestId('profile-top-btn');
    const searchBtn = screen.getByTestId('search-top-btn');
    const title = screen.getByTestId('page-title');

    expect(profileBtn).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
