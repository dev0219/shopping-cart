import productJson from '../../data/product.json';
import { useState } from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
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
    <div className="--center-all dg-shopping-list" style={{ minHeight: '80vh' }}>
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
                      <div className="shopping-list-item__price-wrapper" style={{ marginBottom: "-25px" }}>
                        <span className="shopping-list-item__current-price">${pro.finalPrice}</span>
                        <span className="shopping-list-item__regular-price">
                          reg
                          ${pro.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shopping-list-item__action-wrapper">
                  <div className="shopping-list-item__action-wrapper-counter">
                    <div className="increment-decrement counter">
                      <div style={{ fontSize: "15px" }} className="counter__trash counter-button" onClick={() => changeQuantity(index, 'decrease')}><FaTrashAlt /></div>
                      <span className="counter__quantity">{pro.quantity}</span>
                      <span className="state--loading hidden"><span></span><span></span><span></span><span></span></span>
                      <div style={{ fontSize: "15px" }} className="counter__increment counter-button" onClick={() => changeQuantity(index, 'increase')}><FaPlus /></div>
                    </div>
                  </div>
                </div>
              </div>
              {pro.allDeals.coupons.length &&
                <DealItem key={"deal-item" + index} item={pro.allDeals.coupons} applied={pro.dealsApplied.coupons} offers={pro.allDeals.offers}/>
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
