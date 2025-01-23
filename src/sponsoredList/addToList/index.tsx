
import { useState } from "react";

const index = ({ pro, onaddToList, onchangeQuantity }: any) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true)
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className="dg-product-card__add-button-wrapper">
            {pro.quantity == 0 ? <button aria-label="Add to Cart" type="button" data-toggle="modal" className="dg-product-card__add-button" onClick={() => onaddToList(pro)}>
                <img src="https://www.dollargeneral.com/etc.clientlibs/dollargeneral/clientlibs/clientlib-site/resources/images/plus-transparent.svg" alt="Add Grown in Idaho Crispy Potato Puffs, 28 oz Bag to cart" />
                {/* <span className="state--loading hidden"><span></span><span></span><span></span><span></span></span> */}

            </button> :
                <div className={"dg-product-card__product-quantity increment-decrement " + (isHovering && pro.quantity > 0 ? 'expand-element' : ' ')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {isHovering && pro.quantity == 1 && <button aria-label="Remove product from cart" className="counter__trash" onClick={() =>onchangeQuantity(pro,-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                    </button>}

                    {isHovering && pro.quantity > 1 && <button aria-label="Increase product quantity by 1" className="counter__decrement" onClick={() =>onchangeQuantity(pro,-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                        </svg>
                    </button>}

                    <div className="loader"></div>
                    <span className="quantity counter__quantity">{pro.quantity}</span>

                    {isHovering && pro.quantity > 0 && <button aria-label="Increase product quantity by 1" className="counter__increment" onClick={() =>onchangeQuantity(pro,1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </button>}
                </div>}
        </div>
    );
};

export default index;
