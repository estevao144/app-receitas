import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

import './Footer.css';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="fixed-bottom"
    >
      <Link
        to="/drinks"
      >
        <img
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
          alt="drink"
        />

      </Link>

      <Link
        to="/meals"
      >
        <img
          src={ mealIcon }
          data-testid="meals-bottom-btn"
          alt="meals"
        />
      </Link>

    </footer>
  );
}

export default Footer;
