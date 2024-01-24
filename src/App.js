import React, { useState } from 'react';
import MealsSummary from './components/Meals/MealsSummary';
import Header from './components/Layout/Header';
import Meals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MealsSummary />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App;
