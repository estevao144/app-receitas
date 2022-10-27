import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Meals from './Meals';
import Header from '../components/Header';
import context from '../context/Context';

function Recipes() {
  const { searchBtnMeals, recipeList: { meals = [] } } = useContext(context);
  return (
    <div>
      { meals.length === 1 && <Redirect to={ `/meals/${meals[0].idMeal}` } /> }
      <Header pageName="Meals" />
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ searchBtnMeals }
      >
        Search
      </button>
      <Meals />
    </div>
  );
}

export default Recipes;
