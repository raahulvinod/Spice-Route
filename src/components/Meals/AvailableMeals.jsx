import React from 'react';

import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Snack Meal',
    description: '2 Pcs Chicken + 3 Strips',
    price: 369,
  },
  {
    id: 'm2',
    name: '10 Pc Grilled Chicken',
    description: '10 Pc Grilled Chicken',
    price: 849,
  },
  {
    id: 'm3',
    name: 'M Crunchy Burger',
    description: 'Crispy And Spicy Chicken Burger',
    price: 149,
  },
  {
    id: 'm4',
    name: 'Burger Meal',
    description: '1 Pc Royal Crunchy Burger + Fries + Drink 330 Ml',
    price: 189,
  },
  {
    id: 'm5',
    name: 'Bbq Chicken Pizza',
    description:
      'Bbq Chciken Pizza - Made With Bbq Sauce,Red Onionand With Mozzarella Cheese',
    price: 289,
  },
  {
    id: 'm6',
    name: 'Mexicano Pizza',
    description: 'Mexicano - Classic Sauce Topped With Mozzarella Cheese',
    price: 299,
  },
];

export const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
