import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import context from '../context/Context';

function Header() {
  const history = useHistory();
  const { pageName, showHeader: showSearch } = useContext(context);

  const [showInput, setShowinput] = useState(false);

  const handleProfile = () => {
    history.push('/profile');
  };

  const handleSearch = () => {
    setShowinput((prev) => !prev);
  };

  return (
    <div>
      <h1 data-testid="page-title">
        {' '}
        { pageName }
        {' '}
      </h1>
      <button
        type="button"
        onClick={ handleProfile }
      >
        <img data-testid="profile-top-btn" src={ profileIcon } alt="profileIcon" />
      </button>

      {showSearch
      && (
        <input
          data-testid="search-input"
        />
      )}
      {showInput && { SearchBar }}
      <button
        type="button"
        onClick={ handleSearch }
      >
        <img data-testid="search-top-btn" src={ searchIcon } alt="searchIcon" />
      </button>
    </div>
  );
}

export default Header;
