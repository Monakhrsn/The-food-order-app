import React from 'react';
import MealsSummary from './components/Meals/MealsSummary';
import Header from './components/Layout/Header';
import Meals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <MealsSummary />
      <Meals />
    </React.Fragment>
  )
}

export default App;
