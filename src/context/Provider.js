import PropTypes from 'prop-types';
import React, { useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import context from './Context';

function Provider({ children }) {
  const history = useHistory();

  const handleFavRecipes = useCallback(() => {
    history.push('/favorite-recipes');
  }, [history]);

  const handleDoneRecipes = useCallback(() => {
    history.push('/done-recipes');
  }, [history]);

  const handleLogout = useCallback(() => {
    localStorage.clear();

    history.push('/');
  }, [history]);

  const contextValue = useMemo(() => ({
    name: '',
    handleDoneRecipes,
    handleFavRecipes,
    handleLogout,
  }), [
    handleDoneRecipes,
    handleFavRecipes,
    handleLogout,
  ]);

  return (
    <context.Provider value={ contextValue }>{children}</context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
