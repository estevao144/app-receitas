import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import Header from '../components/Header';
import Provider from '../context/Provider';

describe('Testando o componente Header', () => {
  test('Testa os se o componente renderiza corretamente', () => {
    renderWithRouter(<Provider><App /></Provider>);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const EMAIL_USER = 'testes@testando.com';
    const PASSWORD_USER = '1234567';
    userEvent.type(email, EMAIL_USER);
    userEvent.type(password, PASSWORD_USER);
    const loginButton = screen.getByTestId('login-submit-btn');
    expect(loginButton).toBeInTheDocument();
    userEvent.click(loginButton);
  });
  test('Testando botão de pesquisa', () => {
    renderWithRouter(<Provider><Header /></Provider>);
    const searchBtn = screen.getByRole('img', {
      name: /searchicon/i,
    });
    userEvent.click(searchBtn);
    const searchInput = screen.getByTestId('search-input');
    userEvent.click(searchBtn);
    expect(searchInput).not.toBeInTheDocument();
  });
  test('Testa a mudança de pagina', () => {
    const { history } = renderWithRouter(<Provider><Header /></Provider>);
    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    expect(history.location.pathname).toBe('/profile');
  });
});
