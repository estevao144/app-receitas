import React, { useContext, useEffect } from 'react';
import context from '../context/Context';

function DoneRecipes() {
  const { setPageName, setShowHeader } = useContext(context);
  useEffect(() => {
    setShowHeader({
      showSearch: false,
      showName: true,
      showProfile: true,
    });
    setPageName('Done Recipes');
  }, []);
  return (
    <header>
      <h1>Done Recipes</h1>
    </header>
  );
}

export default DoneRecipes;
