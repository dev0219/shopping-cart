import { Route, Routes } from 'react-router-dom';
import ShoppingList from './shoppingList'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShoppingList />} />
      </Routes>
    </>
  );
};

export default App;
