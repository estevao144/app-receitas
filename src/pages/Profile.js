import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FavRecipes from '../images/whiteHeartIcon.svg';
import doneRecipe from '../images/shareIcon.svg';
import logoutIcon from '../images/blackHeartIcon.svg';

function Profile() {
  const email = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  const handleFavRecipes = () => {
    history.push('/favorite-recipes');
  };

  const handleDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const handleLogout = () => {
    localStorage.clear();

    history.push('/');
  };

  return (
    <div>
      <Header pageName="Profile" showSearch={ false } />

      <p data-testid="profile-email">
        { Object.values(email) }
        {' '}
      </p>

      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ handleDoneRecipes }
      >
        <img
          src={ doneRecipe }
          alt="doneRecipe"
        />
        Done Recipes

      </button>

      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ handleFavRecipes }
      >
        <img
          src={ FavRecipes }
          alt="drink"
        />
        Favorite Recipes

      </button>

      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleLogout }
      >
        <img
          src={ logoutIcon }
          alt="logout"
        />
        Logout
      </button>

      <Footer />
    </div>
  );
}

export default Profile;
