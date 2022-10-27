import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import Provider from '../context/Provider';
import Recipes from '../pages/Recipes';
// import requestAPIMeals from '../services/APIs';

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

  test('', async () => {
    renderWithRouter(<Provider><Recipes /></Provider>);

    const searchTopBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchTopBtn);

    const searchInput = screen.getByTestId('search-input');
    userEvent.type(searchInput, 'chicken');

    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    userEvent.click(ingredientRadio);

    const searchBtnMeals = screen.getByTestId('search-input');
    userEvent.click(searchBtnMeals);

    // jest.spyOn(global, 'fetch')
    //   .mockResolvedValue({
    //     json: jest.fn().mockResolvedValue([]),
    //   });

    // const listMeals = await requestAPIMeals(searchInput.value, null, null);

    // expect(requestAPIMeals).toBeCalledTimes();
  });
});
