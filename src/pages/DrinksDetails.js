import React, { useContext, useEffect } from 'react';
import context from '../context/Context';

function DrinksDetails() {
  const { data, setData, ingredients, setIngredients,
    measure, setMeasure } = useContext(context);

  const { pathname } = window.location;

  const fetchDrinks = async (id) => {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await request.json();
    setData(...response.drinks);
    const info = response.drinks[0];

    const filtringElements = Object.entries(info)
      .filter((e) => e[0].includes('strIngredient'));
    const filteredIngredients = filtringElements.map((e) => e.slice(1))
      .filter((it) => it[0] !== '' && it[0] !== null);
    setIngredients(filteredIngredients);

    const measureList = Object.entries(info).filter((e) => e[0].includes('strMeasure'));
    const filteredMesure = measureList.map((e) => e.slice(1))
      .filter((it) => it[0] !== '' && it[0] !== null);
    setMeasure(filteredMesure);
  };

  useEffect(() => {
    const splitStr = pathname.split('/');
    fetchDrinks(splitStr[2]);
  });

  return (
    <div>
      <img
        src={ data.strDrinkThumb }
        alt={ data.strDrink }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">{ data.strDrink }</h1>
      <h3 data-testid="recipe-category">
        Category:
        { data.strCategory }
        { data.strAlcoholic }
      </h3>
      <div>
        <h3>
          Ingredients:
        </h3>
        <ol>
          {ingredients.map((item, index) => (
            <li key={ item } data-testid={ `${index}-ingredient-name-and-measure` }>
              {item}
              {' '}
              -
              {' '}
              {measure[index]}
            </li>
          ))}
        </ol>
      </div>
      <p data-testid="instructions">{ data.strInstructions }</p>
    </div>
  );
}

export default DrinksDetails;
