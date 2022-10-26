import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

function Drinks() {
  const [drinksArray, setDrinksArray] = useState([]);
  const [categorysArray, setCategorysArray] = useState([]);

  useEffect(() => {
    const requestAPI = async () => {
      const numeroDeBebidas = 12;
      const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(endPoint);
      const { drinks } = await response.json();
      const newDrinks = drinks.slice(0, numeroDeBebidas);
      setDrinksArray(newDrinks);
    };
    requestAPI();

    const requestApiCategory = async () => {
      const numeroDeCategorias = 5;
      const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const response = await fetch(endPoint);
      const { drinks } = await response.json();
      const cetegorys = drinks.slice(0, numeroDeCategorias);
      setCategorysArray(cetegorys);
    };
    requestApiCategory();
  }, []);

  return (
    <>
      <Header />
      <div>
        {categorysArray.map((category, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${category.strCategory}-category-filter` }
          >
            {category.strCategory}
          </button>
        ))}
      </div>
      <div>
        {drinksArray.map((drink, index) => (
          <ul key={ drink.idDrink } data-testid={ `${index}-recipe-card` }>
            <li data-testid={ `${index}-card-name` }>{drink.strDrink}</li>
            <img
              data-testid={ `${index}-card-img` }
              src={ drink.strDrinkThumb }
              alt={ drink.strDrink }
            />
          </ul>
        ))}
      </div>
    </>
  );
}
export default Drinks;
