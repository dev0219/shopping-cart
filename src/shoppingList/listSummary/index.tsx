import { useState } from 'react';

const index = ({items}:any) => {

  const [products, setProducts] = useState(items.products);

  return (
    <div className='shopping-list-summary'>
        <div className="order-summary" data-page-title="shopping-list">
          <h2 className="order-summary__heading">List summary</h2>
          <div className="order-summary__line">
            <span className="order-summary__line-label">
              Original Total
              <span className="order-summary__line-label-suffix order-summary__line-original-total">&nbsp;({products.length} items)</span>
            </span>
            <span className="order-summary__line-value order-summary__line-original-total">${items.originalTotal}</span>
          </div>
          <div className="order-summary__line order-summary__line--bold">
            <span className="order-summary__line-label">Deals Applied</span>
            <span className="order-summary__line-value order-summary__line-deals">-${items.totalCouponsApplied + items.totalDiscounts}</span>
          </div>
          <div className="order-summary__line order-summary__line--bold">
            <span className="order-summary__line-label">Subtotal</span>
            <span className="order-summary__line-value order-summary__line-subtotal">${items.subtotal}</span>
          </div>
          <div className="order-summary__line">
            <span className="order-summary__line-label">Tax</span>
            <span className="order-summary__line-value order-summary__line-tax">${items.taxTotal}</span>
          </div>
          <div className="order-summary__line order-summary__line-total order-summary__line--bold">
            <span className="order-summary__line-label order-summary__line-total">Estimated total</span>
            <span className="order-summary__line-value order-summary__line-total">${items.total}</span>
          </div>
        </div>
      </div>
  );
};

export default index;
