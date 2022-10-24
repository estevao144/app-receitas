import React, { useContext, useEffect } from 'react';
import context from '../context/Context';

function Drinks() {
  const { setPageName, setShowHeader } = useContext(context);
  useEffect(() => {
    setShowHeader({
      showSearch: true,
      showName: true,
      showProfile: true,
    });
    setPageName('Drinks');
  }, []);
  return (
    <header>
      <h1>Drinks</h1>
    </header>

  );
}

export default Drinks;
