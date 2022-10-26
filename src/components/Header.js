import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ showSearch = true, profileImage = true, pageName }) {
  const history = useHistory();

  const [showInput, setShowinput] = useState(false);

  const handleProfile = () => {
    history.push('/profile');
  };

  const handleSearch = () => {
    setShowinput((prev) => !prev);
  };

  return (
    <div>
      { ((pageName) && (
        <h1 data-testid="page-title">
          { pageName }
        </h1>
      ))}
      { ((profileImage) && (
        <button
          type="button"
          onClick={ handleProfile }
        >
          <img data-testid="profile-top-btn" src={ profileIcon } alt="profileIcon" />
        </button>

      ))}

      {((showSearch) && (
        <button
          type="button"
          onClick={ handleSearch }
        >
          <img data-testid="search-top-btn" src={ searchIcon } alt="searchIcon" />
        </button>
      ))}
      {
        (showInput)
        && (<input
          data-testid="search-input"
          type="text"
          placeholder="Search"
        />)
      }
      {
        (showInput)
        && (<SearchBar />)
      }
    </div>
  );
}

Header.propTypes = {
  pageName: PropTypes.string,
  showSearch: PropTypes.bool,
  profileImage: PropTypes.bool,
}.isRequired;

export default Header;
