import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);
=======
>>>>>>> 27113fd1dc135e571314628b3eb55e966e6bb7d9

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(process.env.REACT_APP_FIREBASE_DB);
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
<<<<<<< HEAD
      setIsLoading(false);
=======
>>>>>>> 27113fd1dc135e571314628b3eb55e966e6bb7d9
    };
    fetchMeals();
  }, []);

<<<<<<< HEAD
  if (isLoading) {
    <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>;
  }

=======
>>>>>>> 27113fd1dc135e571314628b3eb55e966e6bb7d9
  const mealsList = meals.map((meal) => (
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
