import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
