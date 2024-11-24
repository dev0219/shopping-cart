// import { Link } from 'react-router-dom';
// import Image from '../../assets/404-error.png';
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
                    <button type="button" className="shopping-list__button shopping-list-item__action-wrapper-counter-movetocart hidden button--disabled">
                      <span className="shopping-list-item__cart-icon">
                        <img src="https://www.dollargeneral.com/etc.clientlibs/dollargeneral/clientlibs/clientlib-site/resources/images/cart-icon.svg" />
                      </span>
                      <p>Move to cart</p>
                    </button>
                  </div>

                </div>

                {/* <form aria-label="Item name" className="shopping-list-item__edit-form">
                  <div className="shopping-list-item__edit-form-input-wrapper input-wrapper">
                    <label className="shopping-list-item__name-label">
                      Item name
                      <span aria-hidden="true">*</span>
                      <input type="text" name="name" aria-required="true" className="shopping-list-item__name-input" />
                      <div className="shopping-list-item__name-input-error hidden">Item Name can't be blank</div>
                    </label>
                    <label className="shopping-list-item__estimate-label">
                      Estimate
                      <span aria-hidden="true">*</span>
                      <input type="text" name="price" aria-required="true" pattern="\$?[\d,]+(\.\d\d)?" className="shopping-list-item__price-input" />
                      <div className="shopping-list-item__price-input-error hidden">Estimate can't be blank</div>
                    </label>
                  </div>
                  <div className="shopping-list-item__toolbar">
                    <div className="increment-decrement counter">
                      <button aria-label="Remove item from cart" className="counter__trash counter-button">
                        <span className="sr-only">Remove item from cart</span>
                      </button>
                      <button aria-label="Decrement quantity by one" className="counter__decrement counter-button hidden">
                        <span className="sr-only">Decrement quantity by one</span>
                      </button>
                      <span className="counter__quantity">1</span>
                      <span className="state--loading hidden"><span></span><span></span><span></span><span></span></span>

                      <button aria-label="Increment quantity by one" className="counter__increment counter-button">
                        <span className="sr-only">Increment quantity by one</span>
                      </button>
                    </div>

                    <div className="shopping-list-item__edit-form-button-wrapper">
                      <button type="button" className="shopping-list__button shopping-list-item__cancel-button">
                        Cancel
                      </button>
                      <button type="button" className="shopping-list__button shopping-list-item__edit-submit-button" aria-label="Save">
                        Save
                      </button>
                    </div>
                  </div>

                </form> */}
              </div>
              {pro.allDeals.coupons.length &&
                <DealItem key={"deal-item" + index} item={pro.allDeals.coupons} applied={pro.dealsApplied.coupons} offers={pro.allDeals.offers}/>
              }
              {/* <div className="shopping-list-item__deals-applied">
                <button className="shopping-list-item__deals-applied-toggle collapsed" aria-expanded="false" data-toggle="collapse" aria-label="Deals applied" data-target="#shopping-list-item__deals-applied-list-12546011112" aria-controls="#shopping-list-item__deals-applied-list-12546011112">
                  <i className="shopping-list-item__deals-applied-toggle-icon"><img src="/etc.clientlibs/dollargeneral/clientlibs/clientlib-site/resources/images/deals.svg" /></i>
                  <div className="shopping-list-item__deals-applied-toggle-label">Deals applied</div>
                  <i className="dg-icon"></i>
                </button>
                <div className="shopping-list-item__deals-applied-list-wrapper collapse" id="shopping-list-item__deals-applied-list-12546011112">
                  <p className="shopping-list-item__deals-applied-info hidden"></p>
                  <ul className="shopping-list-item__deals-applied-list"><li className="product-deal">
                    <div className="product-deal__hint hidden"></div>
                    <div className="product-deal__container-main">
                      <div className="product-deal__header">
                        <span className="product-deal__type">Coupon:</span>
                        <span className="product-deal__price">-$0.13</span>
                      </div>
                      <span className="product-deal__description">Save $5.00 on on your purchase of $25.00 or more (pre-tax) at Dollar General</span>
                      <div className="product-deal__container-bottom">
                        <button className="product-deal__detail" type="button" data-toggle="modal" data-target="#coupon-id-12546011112-0-applied">Details</button>
                        <button className="product-deal__add hidden"><i className="dg-icon dg-icon-add"></i></button>
                      </div>
                    </div>
                    <div className="discounts__card-details-modal modal fade" role="dialog" id="coupon-id-12546011112-0-applied">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="discounts__card-details-content">
                            <div className="image-wrapper">
                              <button type="button" className="close" data-dismiss="modal">×</button>
                              <img className="discounts__card-image modal-image" alt="" role="presentation" aria-hidden="true" src="https://cdn.cpnscdn.com/static.coupons.com/ext/bussys/cpa/pod/81/101/5081101_a21b7141-098c-4064-98b7-23bc7df97133_high.jpg" />
                            </div>
                            <div className="discounts__card-brand">Dollar General</div>
                            <div className="discounts__card-save-amount">Save $5.00</div>
                            <div className="discounts__card-description modal-description">on your purchase of $25.00 or more (pre-tax) at Dollar General</div>
                            <div className="discounts__card-type hidden">DG Store</div>
                            <div className="discounts__card-must-buy-limit"></div>
                            <div className="discounts__card-expiration modal-expiration">Exp: 11/23/24</div>
                            <button className="add-button clipped">
                              <div className="add-button__text">Added</div>
                            </button>
                            <section className="couponPickupDetails__detail">
                              <div className="details-header">Details</div>
                              <div className="details-limit">
                                <span className="details-limit-header"></span>
                                <span className="details-limit-text"></span>
                              </div>
                              <div className="details-must-buy">
                                <span className="details-must-buy-header"></span>
                                <span className="details-must-buy-text"></span>
                              </div>
                              <div className="disclaimer-text">Coupon Expires on 11/23/24. Must present discount coupon to cashier. $...</div>
                              <button className="show-more-button link-button">Show more</button>
                              <button className="show-less-button link-button hidden">Show less</button>
                            </section>
                          </div>
                          <div className="discounts__card-details-modal-offer-tutorial">
                            <img className="discounts__card-details-tutorial-image" src="" />
                              <div className="discounts__card-details-tutorial-content-wrapper">
                                <label className="discounts__card-text" data-index="-1"></label>
                                <div className="discounts__card-details-button-wrapper hidden">
                                  <button type="button" className="close discounts__card-details-modal-close">Close</button>
                                  <div className="discounts__card-details-dots"></div>
                                  <button type="button" className="discounts__card-details-modal-next">Next</button>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li></ul>
                </div>
              </div> */}
              {/* <div className="shopping-list-item__deals-available">
                <button className="shopping-list-item__deals-available-toggle collapsed" aria-expanded="false" data-toggle="collapse" aria-label="Deals available" data-target="#shopping-list-item__deals-available-list-12546011112" aria-controls="#shopping-list-item__deals-available-list-12546011112">
                  <i className="shopping-list-item__deals-available-toggle-icon"><img src="/etc.clientlibs/dollargeneral/clientlibs/clientlib-site/resources/images/deals.svg" /></i>
                  <div className="shopping-list-item__deals-available-toggle-label">Deals available</div>
                  <i className="dg-icon"></i>
                </button>
                <div className="shopping-list-item__deals-available-list-wrapper collapse" id="shopping-list-item__deals-available-list-12546011112">
                  <p className="shopping-list-item__deals-available-info hidden">If you clip a coupon and cash back for the same item, the coupon takes priority, and
                    cash back won't apply.</p>
                  <ul className="shopping-list-item__deals-available-list"><li className="product-deal">
                    <div className="product-deal__hint">You're close, add more to unlock</div>
                    <div className="product-deal__container-main product-deal__container-main--half-border">
                      <div className="product-deal__header">
                        <span className="product-deal__type">Offer:</span>
                        <span className="product-deal__price"></span>
                      </div>
                      <span className="product-deal__description">2 FOR $2.80 SELECT TRIDENT</span>
                      <div className="product-deal__container-bottom">
                        <button className="product-deal__detail" type="button" data-toggle="modal" data-target="#offer-id-12546011112-0-available">Details</button>
                        <button className="product-deal__add hidden"><i className="dg-icon dg-icon-add"></i></button>
                      </div>
                    </div>
                    <div className="discounts__card-details-modal modal fade offers" role="dialog" id="offer-id-12546011112-0-available">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="discounts__card-details-content">
                            <div className="image-wrapper">
                              <button type="button" className="close" data-dismiss="modal">×</button>
                              <img className="discounts__card-image modal-image" alt="" role="presentation" aria-hidden="true" />
                            </div>
                            <div className="discounts__card-brand"></div>
                            <div className="discounts__card-save-amount">2 FOR $2.80</div>
                            <div className="discounts__card-description modal-description">2 FOR $2.80 SELECT TRIDENT</div>
                            <div className="discounts__card-type hidden"></div>
                            <div className="discounts__card-must-buy-limit"></div>
                            <div className="discounts__card-expiration modal-expiration">Exp: 12/21/24</div>
                            <button className="add-button">
                              <div className="add-button__text">Add deal</div>
                            </button>
                            <section className="couponPickupDetails__detail">
                              <div className="details-header">Details</div>
                              <div className="details-limit">
                                <span className="details-limit-header"></span>
                                <span className="details-limit-text"></span>
                              </div>
                              <div className="details-must-buy">
                                <span className="details-must-buy-header"></span>
                                <span className="details-must-buy-text"></span>
                              </div>
                              <div className="disclaimer-text"></div>
                              <button className="show-more-button link-button hidden">Show more</button>
                              <button className="show-less-button link-button hidden">Show less</button>
                            </section>
                          </div>
                          <div className="discounts__card-details-modal-offer-tutorial">
                            <img className="discounts__card-details-tutorial-image" src="" />
                              <div className="discounts__card-details-tutorial-content-wrapper">
                                <label className="discounts__card-text" data-index="-1"></label>
                                <div className="discounts__card-details-button-wrapper hidden">
                                  <button type="button" className="close discounts__card-details-modal-close">Close</button>
                                  <div className="discounts__card-details-dots hide"></div>
                                  <button type="button" className="discounts__card-details-modal-next">Next</button>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li></ul>
                </div>
              </div> */}
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
