import React, { useContext } from 'react';
import context from '../context/Context';

function SearchBar() {
  const { handleCategory } = useContext(context);
  return (
    <>
      <label htmlFor="ingredient">
        Ingredient
        <input
          type="radio"
          id="ingredient"
          data-testid="ingredient-search-radio"
          name="searchCategory"
          value="ingredient"
          onChange={ ({ target: { value } }) => handleCategory(value) }
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          type="radio"
          id="name"
          data-testid="name-search-radio"
          name="searchCategory"
          value="name"
          onChange={ ({ target: { value } }) => handleCategory(value) }
        />
      </label>
      <label htmlFor="first-letter">
        First Letter
        <input
          type="radio"
          id="first-letter"
          data-testid="first-letter-search-radio"
          name="searchCategory"
          value="firstLetter"
          onChange={ ({ target: { value } }) => handleCategory(value) }
        />
      </label>
    </>
  );
}

export default SearchBar;
