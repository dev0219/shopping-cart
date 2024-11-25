import productJson from '../data/product.json';
import { useState } from 'react';
import './index.scss';
import DealItem from './dealItem';
import ListSummary from './listSummary';
import AddToCart from './addToCart';

const index = () => {

  const [products, setProducts] = useState(productJson.products);

  const linkDetail = (upc: any) => {
    console.log("--- upc", upc)
  }

  const changeQuantity = (index: any, type: any) => {
    let productsLst = [...products]
    let currentProduct = productsLst[index];
    if (type === 'increase') {
      currentProduct.quantity++;
    } else {
      if (currentProduct.quantity != 0) {
        currentProduct.quantity--;
      }
    }
    productsLst[index] = currentProduct;
    setProducts(productsLst)
  }

  const closeItem = (pro: any) => {
    let productsLst = [...products]
    productsLst = productsLst.filter((item) => item.listItemId != pro.listItemId)
    setProducts(productsLst)
  }

  const moveToCart = (pro:any) => {
    alert("Item moved to your cart")
    console.log(pro)
  }

  return (
    <div className="dg-shopping-list">
      <ul className='shopping-lists'>
        {products.map((pro: any, index:any) => {
          return (
            <li key={index} className="shopping-list-item">
              <AddToCart pro={pro} index={index} onchangeQuantity={changeQuantity} oncloseItem={closeItem} onmoveItem={moveToCart} onlinkDetail={linkDetail}/>
              {pro.allDeals.coupons.length &&
                <DealItem key={"deal-item" + index} item={pro.allDeals.coupons} applied={pro.dealsApplied.coupons} offers={pro.allDeals.offers} />
              }
            </li>
          )
        })}
      </ul>
      <ListSummary items={productJson} />
    </div>
  );
};

export default index;
