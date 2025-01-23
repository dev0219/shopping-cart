
import { useState } from "react";

const index = () => {
    // const [isHovering, setIsHovering] = useState(false);
    // const handleMouseEnter = () => {
    //     setIsHovering(true)
    // };

    // const handleMouseLeave = () => {
    //     setIsHovering(false);
    // };

    return (
        <div className="dg-product-card__deals">
                    <a aria-label="DG Product Card Details" className="sdd-tile__navigation-link">
                        <div className="dg-product-card__deals-coupons">
                            <div className="dg-product-card__deals-coupons-label" style={{backgroundColor: "rgb(255, 242, 0)"}}>COUPON</div>
                            <div className="dg-product-card__deals-coupons-label" style={{backgroundColor: "black", color:'white'}}>CASH BACK</div>
                            <div className="dg-product-card__deals-coupons__wrapper">
                                <button aria-label="Add Product Card Deals Coupons" className="dg-product-card__deals-coupons-add-btn">
                                 <span></span>
                                </button>
                                <div className="dg-product-card__deals-coupons-applied hidden">
                                    <img src="https://www.dollargeneral.com//etc.clientlibs/dollargeneral/clientlibs/clientlib-site/resources/images/green-checkmark.svg" />
                                </div>
                                <p>Save $1.00</p>
                            </div>
                        </div>
                        </a>
                        <a aria-hidden="true" className="dg-product-card__deals-offer-only hidden"></a>
                        <button aria-label="Deals available" className="dg-product-card__deals-multi-offer hidden">
                            <img alt="Active Deals Image" src="https://www.dollargeneral.com//etc.clientlibs/dollargeneral/clientlibs/clientlib-site/resources/images/active-deals.svg" />
                            <p>Deals available</p>
                        </button>
                    </div>
    );
};

export default index;
