import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import Falafel from '../../assets/Raw falafel wrap in collard green leaf.jpeg';
import Pizza from '../../assets/Raw pizza with spenach, pesto and marinated vegtabels.jpeg';
import Sallad from '../../assets/Raw vegan fruiti sallad.jpeg';
import Lasagna from '../../assets/Raw vegan lasagna with cashew chees.jpeg';
import Burger from '../../assets/Raw vegan portobello mushromm burger.jpeg';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Raw vegan falafel wrap',
    description: 'Falafel wrap with nuts and green leafs',
    price: 22.99,
    itemImg: Falafel
    
  },
  {
    id: 'm2',
    name: 'Raw vegan pizza',
    description: 'Pizza with spenat, pesto and vegtables',
    price: 16.5,
    itemImg: Pizza
  },
  {
    id: 'm3',
    name: 'Raw vegan sallad',
    description: 'Sallad with green leafs and seasonal fruits',
    price: 12.99,
    itemImg: Sallad
  },
  {
    id: 'm4',
    name: 'Raw vegan lasagna',
    description: 'Lansange with sushini and cashew chees',
    price: 18.99,
    itemImg: Lasagna
  },
  {
    id: 'm5',
    name: 'Raw vegan potobello burger',
    description: 'Burger with mashroom, mixed nuts and greens ',
    price: 18.99,
    itemImg: Burger
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      itemImg={meal.itemImg}
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
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

export default AvailableMeals;
