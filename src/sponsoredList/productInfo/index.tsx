const index = ({ pro }: any) => {

    const formatValue = (value: any) => {
        if (value > 1000) {
            return (value / 1000).toFixed(1) + 'K';
        }
        return value.toString();
    }
    
    return (
        <div className="dg-product-card__product-info product-card__description">
            <div className="dg-product-card__product-info__section">
                <div className="product-info__section-price">
                    <span className={"dg-product-card__product-info__product-price product-card__current-price " + (pro.finalPrice !== pro.originalPrice ? "green-color" : "")}>${pro.finalPrice}</span>
                    {pro.finalPrice !== pro.originalPrice && <span className="dg-product-card__product-info__product-regular-price product-card__regular-price">${pro.originalPrice}</span>}
                </div>
                {pro.ratingReviewCount !== 0 &&
                    <div className="power-reviews" data-reviews-type="ReviewSnippet">
                        <img src="https://www.dollargeneral.com/etc.clientlibs/dollargeneral/clientlibs/clientlib-site/resources/images/review-star-full.svg" alt="Reviews" />
                        <a>{pro.averageRating} ({formatValue(pro.ratingReviewCount)})</a>
                    </div>}
            </div>
            <p className="dg-product-card__product-name product-card__title">{pro.description}</p>
        </div>
    );
};

export default index;