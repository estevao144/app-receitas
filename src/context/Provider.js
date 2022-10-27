import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import context from './Context';

function Provider({ children }) {
  const [data, setData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [measure, setMeasure] = useState([]);
  const contextValue = useMemo(
    () => ({
      data,
      setData,
      ingredients,
      setIngredients,
      measure,
      setMeasure,
    }),
  );

  return (
    <context.Provider value={ contextValue }>{children}</context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
