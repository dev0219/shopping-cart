import { useState } from "react";


const index = ({ productObj,closeModal }: any) => {

  const [isShow, setIsShow] = useState(false);
  return (
    <div className="modal">
    <div className="modal-content">
      <div className="close" onClick={() => closeModal()}>&times;</div>
      <div className='image-wrapper'>
        <img src={productObj.Image2} />
      </div>
      {productObj.OfferCode ? <div>
        <div className="discounts__card-brand">Dollar General</div>
        <div className="discounts__card-save-amount">{productObj.OfferSummary}</div>
        <div className="discounts__card-description modal-description">{productObj.OfferDescription}</div>
        <div className="discounts__card-expiration modal-expiration">Exp: 11/23/24</div>
        <button className="add-button clipped">
          <div className="add-button__text">Added</div>
        </button>
        <p></p>
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

          <div className="disclaimer-text">{isShow ? productObj.offerDisclaimer : (productObj.offerDisclaimer.substring(0, 70) + '...')}</div>
          {!isShow ?
            <button className="show-more-button link-button" onClick={() => setIsShow(true)}>Show more</button> : <button className="show-less-button link-button" onClick={() => setIsShow(false)}>Show less</button>
          }
        </section>
      </div> : <div>
        <div className="discounts__card-description modal-description">{productObj.description}</div>
        <div className="discounts__card-expiration modal-expiration">Exp: 11/23/24</div>
      </div>}
    </div>
  </div>
  );
};

export default index;
