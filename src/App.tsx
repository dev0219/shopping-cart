import { Route, Routes } from 'react-router-dom';
import ShoppingList from './shoppingList';
import Product from './sponsoredList'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
