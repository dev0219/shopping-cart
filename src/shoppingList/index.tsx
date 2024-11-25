import productJsonStaticData from '../data/product.json';
import { useState } from 'react';
import './index.scss';
import DealItem from './dealItem';
import ListSummary from './listSummary';
import AddToCart from './addToCart';

const index = () => {

  const [products, setProducts] = useState(productJsonStaticData.products);
  const [movedItems, setMovedItems] = useState([]);
  const [shoppinglist, setShoppingList] = useState(productJsonStaticData)

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

  const moveToCart = (pro: any) => {
    let items = [...movedItems];
    items.push(pro.listItemId);
    setMovedItems(items);
  }

  const undoMoved = (pro: any) => {
    let items = [...movedItems];
    items = items.filter((item) => item != pro.listItemId);
    setMovedItems(items);
  }

  const addCoupons = (coupon:any) => {
    let shopData = {...shoppinglist};
    shopData.total = shopData.total - 1;
    shopData.totalCouponsApplied = shopData.totalCouponsApplied - 1.5;
    shopData.subtotal = shopData.subtotal - 0.5;
    setShoppingList(shopData)
  }

  return (
    <div className="dg-shopping-list">
      <ul className='shopping-lists'>
        {products.map((pro: any, index: any) => {
          return (
            <li key={index} className="shopping-list-item">
              <AddToCart pro={pro} index={index} onchangeQuantity={changeQuantity} oncloseItem={closeItem} onmoveItem={moveToCart} onlinkDetail={linkDetail} />
              {pro.allDeals.coupons.length != 0 &&
                <DealItem key={"deal-item" + index} item={pro.allDeals.coupons} applied={pro.dealsApplied.coupons} offers={pro.allDeals.offers} onaddCoupons={addCoupons}/>
              }
              {movedItems.includes(pro.listItemId) && <div className='item-moved-cart-container'><span>Item moved to your cart</span><button type='button' onClick={() => undoMoved(pro)}>Undo</button></div>}
            </li>
          )
        })}
      </ul>
      <ListSummary items={shoppinglist} />
    </div>
  );
};

export default index;
