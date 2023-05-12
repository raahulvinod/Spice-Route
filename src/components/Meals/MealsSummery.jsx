import React from 'react';

import classes from './MealsSummery.module.css';

const MealsSummery = () => {
  return (
    <section className={classes.summary}>
      <h2>Deliciousness delivered to your doorstep.</h2>
      <p>
        We have a wide range of options to cater to different tastes. Enjoy
        juicy steaks cooked to perfection, tender grilled chicken, flavorful
        seafood dishes like grilled salmon or shrimp scampi, and creamy
        fettuccine Alfredo or spicy marinara with meatballs.
      </p>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy lunch or dinner at home.
      </p>
    </section>
  );
};

export default MealsSummery;
