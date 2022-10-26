import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

function Meals() {
  const [mealsArray, setMealsArray] = useState([]);
  const [categorysArray, setCategorysArray] = useState([]);
  useEffect(() => {
    const requestAPI = async () => {
      const numeroDeComidas = 12;
      const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(endPoint);
      const { meals } = await response.json();
      const newMeals = meals.slice(0, numeroDeComidas);
      setMealsArray(newMeals);
    };
    requestAPI();

    const requestApiCategory = async () => {
      const numeroDeCategorias = 5;
      const endPoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const response = await fetch(endPoint);
      const { meals } = await response.json();
      const cetegorys = meals.slice(0, numeroDeCategorias);
      setCategorysArray(cetegorys);
    };
    requestApiCategory();
  }, []);

  return (
    <>
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
        {mealsArray.map((meal, index) => (
          <ul key={ meal.idMeal } data-testid={ `${index}-recipe-card` }>
            <li data-testid={ `${index}-card-name` }>{meal.strMeal}</li>
            <img
              data-testid={ `${index}-card-img` }
              src={ meal.strMealThumb }
              alt={ meal.strMeal }
            />
          </ul>
        ))}
      </div>
      <Footer />
    </>

  );
}
export default Meals;
