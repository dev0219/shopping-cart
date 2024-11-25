
const index = ({pro,index,onchangeQuantity,oncloseItem,onmoveItem,onlinkDetail}:any) => {
  return (
    <div className="shopping-list-item__details">
      <div className="shopping-list-item__wrapper" onClick={() => onlinkDetail(pro.upc)}>
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
              <div className="shopping-list-item__close" onClick={() => oncloseItem(pro)}>
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
            <div className="counter__trash counter-button" onClick={() => onchangeQuantity(index, 'decrease')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </div>
            <span className="counter__quantity">{pro.quantity}</span>
            <span className="state--loading hidden"><span></span><span></span><span></span><span></span></span>
            <div className="counter__increment counter-button" onClick={() => onchangeQuantity(index, 'increase')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </div>
          </div>
          {(pro.productAvailability && pro.productAvailability.shipping.isEligible && pro.productAvailability.delivery.isEligible) && 
          <button type="button" className="shopping-list__button shopping-list-item__action-wrapper-counter-movetocart" onClick={() => onmoveItem(pro)}>
          <span className="shopping-list-item__cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            < path fillRule="evenodd" clipRule="evenodd" d="M1.98604 2.30965H0.666667C0.298477 2.30965 0 2.01117 0 1.64299C0 1.2748 0.298477 0.976318 0.666667 0.976318H3.2667L3.56612 8.0626H12.7499L13.7622 4.47995H5.43861C5.07042 4.47995 4.77194 4.18147 4.77194 3.81328C4.77194 3.44509 5.07042 3.14662 5.43861 3.14662H15.5244L13.7588 9.39593H3.60655L3.64432 10.3314H12.4736C12.8418 10.3314 13.1403 10.6299 13.1403 10.9981C13.1403 11.3663 12.8418 11.6648 12.4736 11.6648H2.36373L1.98604 2.30965ZM4.30995 15.1667C3.48152 15.1667 2.80995 14.4951 2.80995 13.6667C2.80995 12.8382 3.48152 12.1667 4.30995 12.1667C5.13837 12.1667 5.80995 12.8382 5.80995 13.6667C5.80995 14.4951 5.13837 15.1667 4.30995 15.1667ZM4.30995 14.1667C4.58609 14.1667 4.80995 13.9428 4.80995 13.6667C4.80995 13.3905 4.58609 13.1667 4.30995 13.1667C4.0338 13.1667 3.80995 13.3905 3.80995 13.6667C3.80995 13.9428 4.0338 14.1667 4.30995 14.1667ZM10.9766 15.1667C10.1482 15.1667 9.47661 14.4951 9.47661 13.6667C9.47661 12.8382 10.1482 12.1667 10.9766 12.1667C11.805 12.1667 12.4766 12.8382 12.4766 13.6667C12.4766 14.4951 11.805 15.1667 10.9766 15.1667ZM10.9766 14.1667C11.2528 14.1667 11.4766 13.9428 11.4766 13.6667C11.4766 13.3905 11.2528 13.1667 10.9766 13.1667C10.7005 13.1667 10.4766 13.3905 10.4766 13.6667C10.4766 13.9428 10.7005 14.1667 10.9766 14.1667Z" fill="black"/>
            </svg>
          </span>
          <p>Move to cart</p>
      </button>}
          
        </div>
      </div>
    </div>              
  );
};

export default index;
