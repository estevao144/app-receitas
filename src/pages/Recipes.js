import React from 'react';
import Meals from './Meals';
import Header from '../components/Header';

function Recipes() {
  return (
    <div>
      <Header pageName="Meals" />
      <Meals />
    </div>
  );
}

export default Recipes;
