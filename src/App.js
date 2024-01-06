import MealsSummary from './components/Layout/MealsSummary';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Header />
      <MealsSummary />
      <Meals />
      {/* <Cart showOrderedList={showOrderedList} /> */}
    </>
  );
}

export default App;
