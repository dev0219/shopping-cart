import productJson from '../../data/product.json';
import { useState } from 'react';
import './cart.scss';
import DealItem from './DealItem';

const Cart = () => {

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

  return (
    <div className="dg-shopping-list">
      <ul className='shopping-lists'>
        {products.map((pro: any, index) => {
          return (
            <li key={index} className="shopping-list-item">
              <div className="shopping-list-item__details">
                <div className="shopping-list-item__wrapper" onClick={() => linkDetail(pro.upc)}>
                  <input className="shopping-list-item__checkbox-input" type="checkbox" />
                  {pro.image != '' &&
                    <img className="shopping-list-item__image" loading="lazy" src={pro.image} alt="Trident Tropical Twist Sugar Free Gum with Xylitol, 14 Stick Pack" />
                  }
                  <div className="shopping-list-item__text-wrapper">
                    <div className="shopping-list__item-data">
                      <div className="shopping-list-item__desc">
                        <p className="shopping-list-item__description">{pro.description}</p>
                      </div>
                      {pro.image != '' &&
                        <div className="shopping-list-item__close" onClick={() => closeItem(pro)}>
                          <button className="shopping-list-item__close-button">
                            &times;
                          </button>
                        </div>
                      }
                      <div className="shopping-list-item__stock"></div>
                      <div className="shopping-list-item__price-wrapper">
                        <span className="shopping-list-item__current-price">${pro.finalPrice}</span>
                        <span className="shopping-list-item__regular-price">
                          {'reg $'+pro.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shopping-list-item__action-wrapper">
                  <div className="shopping-list-item__action-wrapper-counter">
                    <div className="increment-decrement counter">
                      <div className="counter__trash counter-button" onClick={() => changeQuantity(index, 'decrease')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </div>
                      <span className="counter__quantity">{pro.quantity}</span>
                      <span className="state--loading hidden"><span></span><span></span><span></span><span></span></span>
                      <div className="counter__increment counter-button" onClick={() => changeQuantity(index, 'increase')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {pro.allDeals.coupons.length &&
                <DealItem key={"deal-item" + index} item={pro.allDeals.coupons} applied={pro.dealsApplied.coupons} offers={pro.allDeals.offers} />
              }
            </li>
          )
        })}
      </ul>
      <div className='shopping-list-summary'>
        <div className="order-summary" data-page-title="shopping-list">
          <h2 className="order-summary__heading">List summary</h2>
          <div className="order-summary__line">
            <span className="order-summary__line-label">
              Original Total
              <span className="order-summary__line-label-suffix order-summary__line-original-total">&nbsp;({products.length} items)</span>
            </span>
            <span className="order-summary__line-value order-summary__line-original-total">${productJson.originalTotal}</span>
          </div>
          <div className="order-summary__line order-summary__line--bold">
            <span className="order-summary__line-label">Deals Applied</span>
            <span className="order-summary__line-value order-summary__line-deals">-${productJson.totalCouponsApplied + productJson.totalDiscounts}</span>
          </div>
          <div className="order-summary__line order-summary__line--bold">
            <span className="order-summary__line-label">Subtotal</span>
            <span className="order-summary__line-value order-summary__line-subtotal">${productJson.subtotal}</span>
          </div>
          <div className="order-summary__line">
            <span className="order-summary__line-label">Tax</span>
            <span className="order-summary__line-value order-summary__line-tax">${productJson.taxTotal}</span>
          </div>
          <div className="order-summary__line order-summary__line-total order-summary__line--bold">
            <span className="order-summary__line-label order-summary__line-total">Estimated total</span>
            <span className="order-summary__line-value order-summary__line-total">${productJson.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
