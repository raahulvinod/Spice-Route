import React from 'react';

import classes from './MealsSummery.module.css';

const MealsSummery = () => {
  return (
    <section className={classes.summary}>
      <h2>Deliciousness delivered to your doorstep.</h2>
      <p>
        We’re craft Delicious Foods made in-house. Get traditions and favorites
        from all over the world — all on one plate.
      </p>
      <p>
        Everything we serve is house-made and prepared by a staff that cares.
        You could spend a lifetime sampling every flavor combination at Spice
        Route, and we hope you do.
      </p>
    </section>
  );
};

export default MealsSummery;
