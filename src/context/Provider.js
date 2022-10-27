import React, { useCallback, useMemo, useState } from 'react';
import { node } from 'prop-types';
import myContext from './Context';
import { requestAPIMeals, requestAPIDrinks } from '../services/APIs';

function Provider({ children }) {
  const [searchCategory, setSearchCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [recipeList, setRecipeList] = useState([]);

  const handleCategory = (category) => setSearchCategory(category);
  const handleTerm = (term) => setSearchTerm(term);

  const searchBtnMeals = useCallback(() => {
    const searchBtn = async () => {
      let listMeals = [];
      if (searchCategory === 'ingredient') {
        listMeals = await requestAPIMeals(searchTerm, null, null);
      }
      if (searchCategory === 'name') {
        listMeals = await requestAPIMeals(null, searchTerm, null);
      }
      if (searchCategory === 'firstLetter') {
        if (searchTerm.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        }
        listMeals = await requestAPIMeals(null, null, searchTerm);
      }
      setRecipeList(listMeals);
    }; searchBtn();
  }, [searchCategory, searchTerm]);

  const searchBtnDrinks = useCallback(() => {
    const searchBtn = async () => {
      let listDrinks = [];
      if (searchCategory === 'ingredient') {
        listDrinks = await requestAPIDrinks(searchTerm, null, null);
      }
      if (searchCategory === 'name') {
        listDrinks = await requestAPIDrinks(null, searchTerm, null);
      }
      if (searchCategory === 'firstLetter') {
        if (searchTerm.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        }
        listDrinks = await requestAPIDrinks(null, null, searchTerm);
      }
      setRecipeList(listDrinks);
    }; searchBtn();
  }, [searchCategory, searchTerm]);

  const context = useMemo(() => ({
    searchCategory,
    searchTerm,
    recipeList,
    handleCategory,
    handleTerm,
    searchBtnMeals,
    searchBtnDrinks,
  }), [searchCategory, searchTerm, recipeList, searchBtnMeals, searchBtnDrinks]);

  return (
    <myContext.Provider value={ context }>{ children }</myContext.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
