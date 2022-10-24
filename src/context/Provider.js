import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import context from './Context';

function Provider({ children, pages }) {
  const [showHeader, setShowHeader] = useState({
    showSearch: false,
  });
  const [pageName, setPageName] = useState(pages);

  const contextValue = useMemo(
    () => ({
      showHeader,
      setShowHeader,
      pageName,
      setPageName,
    }),
    [showHeader.setShowHeader, pageName, setPageName],
  );

  return (
    <context.Provider value={ contextValue }>{children}</context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
  pages: PropTypes.string,
}.isRequired;
//
export default Provider;
