import React, { useContext, useEffect } from 'react';
import context from '../context/Context';

function FavoriteRecipes() {
  const { setPageName, setShowHeader } = useContext(context);
  useEffect(() => {
    setShowHeader({
      showSearch: false,
      showName: true,
      showProfile: true,
    });
    setPageName('Favorite Recipes');
  }, []);
  return (
    <header>
      <h1>Favorite Recipes</h1>
    </header>
  );
}

export default FavoriteRecipes;
