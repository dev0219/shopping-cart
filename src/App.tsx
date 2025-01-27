import { Route, Routes } from 'react-router-dom';
// import ShoppingList from './shoppingList';
import Product from './sponsoredList';
import EmailVerifyElement from './emailVerify';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmailVerifyElement />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
