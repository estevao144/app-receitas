import React, { useContext, useEffect, useState } from 'react';
import context from '../context/Context';

function MealsDetails() {
  const { data, setData, ingredients, setIngredients,
    measure, setMeasure } = useContext(context);

  const { pathname } = window.location;

  const [youtube, setYoutube] = useState('');

  const fetchMeals = async (id) => {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await request.json();
    setData(...response.meals);
    const info = response.meals[0];

    const ytVideo = info.strYoutube.split('=');
    setYoutube(ytVideo[1]);

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
    fetchMeals(splitStr[2]);
  });

  return (
    <div>
      <img
        src={ data.strMealThumb }
        alt={ data.strMeal }
        data-testid="recipe-photo"
      />

      <h1 className="" data-testid="recipe-title">{ data.strMeal }</h1>
      <h3 data-testid="recipe-category">
        Category:
        { data.strCategory }
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
      <div>
        <iframe
          data-testid="video"
          src={ `https://www.youtube.com/embed/${youtube}` }
          title="youtube"
        />
      </div>
    </div>
  );
}

export default MealsDetails;
