import { Link } from 'react-router-dom';
import Image from '../../assets/404-error.png';
import productJson from '../../data/product.json';
import { useEffect, useState } from 'react';

const Cart = () => {

  const [products, setProduct] = useState(productJson.products);


  return (
    <div className="--center-all" style={{ minHeight: '80vh' }}>
      {/* <img src={Image} alt="404-error" /> */}


      <div>
        {products.map((pro:any) => {
          return (
            <p>{pro.description}</p>
          )
        })}
      </div>
      <br />
      {/* <Link to={'/'}>
        <button className="--btn --btn-primary">Cart pages</button>
      </Link> */}
    </div>
  );
};

export default Cart;
