import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../components/Login';

describe('Testes Login', () => {
  test('Verifica se os inputs são renderizados', () => {
    render(<Login />);

    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('Verifica se os inputs são renderizados', () => {
    render(<Login />);

    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    userEvent.type(email, 'emailInvalido');
    userEvent.type(password, '123');
    expect(button).toBeDisabled();
  });
});
