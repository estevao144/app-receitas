import PropTypes from 'prop-types';
import { useMemo } from 'react';
import context from './Context';

function Provider({ children }) {
  const contextValue = useMemo(
    () => ({
      name: '',
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
