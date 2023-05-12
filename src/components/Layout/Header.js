import React, { Fragment } from 'react';

import coverImage from '../../assets/Food-cover1.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Spice Route</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={coverImage} alt="food banner" />
      </div>
    </Fragment>
  );
};

export default Header;
