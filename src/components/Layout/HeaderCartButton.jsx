import React from 'react';
import { CartIcon } from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icons}>
        <CartIcon />
      </span>
      <span className={classes.cart}>Your Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};

export default HeaderCartButton;
