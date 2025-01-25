import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../index.scss';
import AddToList from '../addToList';
import CardDeals from '../cardDeals';
import SponsoredStaticData from '../../data/sponsored.json'
import ProductInfo from '../productInfo';
import productList from '../../data/product.json';

const index = ({ text }: any) => {

  const [products, setProducts] = useState(SponsoredStaticData.placements[0].products)
  const [productsCartLst, setProductsCartLst] = useState(productList.products);

  const [isImage, setIsImage] = useState(true)

  const addToList = (pro: any) => {
    console.log("@@@ addToList product", pro.upc)
  }

  const changeQuantity = async (pro: any, key: number) => {
    let productCartList = productsCartLst;
    let updatedPrdocutList = []
    if (key < 0) {
      // decrease
      updatedPrdocutList = await Promise.all(productCartList.map(async (ref: any) => {
        if (ref.upc == pro.upc) {
          ref.quantity = ref.quantity - 1
        }
        return ref;
      }))
    } else {
      // increase
      updatedPrdocutList = await Promise.all(productCartList.map(async (ref: any) => {
        if (ref.upc == pro.upc) {
          ref.quantity = ref.quantity + 1
        }
        return ref;
      }))
    }
    setProductsCartLst([...updatedPrdocutList])
    checkQunatity()
  }

  const checkQunatity = async () => {
    let sponsoredLst = products;
    let UpdatedsuponsoredLst = await Promise.all(sponsoredLst.map(async (ref: any) => {
      const product = productsCartLst.filter(item => item.upc == ref.upc);
      if (product.length) {
        ref.quantity = product[0].quantity
      } else {
        ref.quantity = 0
      }
      return ref;
    }))
    setProducts([...UpdatedsuponsoredLst])
  }

  useEffect(() => {
    if (products.length > 0 && productsCartLst.length > 0) {
      checkQunatity()
    }
  }, [])

  return (
    <div className='dg-product-card__body'>
      <div className='dg-product-card__sponsored-header-title'><hr></hr><h2> {text}</h2><hr></hr></div>
      {isImage && <div className="dg-product-card__large-image dg-product-card__mobile-v">
        <div>
          <img style={{ width: '300px' }} src='https://www.dollargeneral.com/content/dam/dg/assets/homepage/by-fiscal-year/2025/week-51/web/January_CCFMedicineCabinet_Square.png' />
        </div>
      </div>}
      {products.length > 0 &&
        <Splide options={{
          rewind: false,
          type: 'slide',
          perPage: 4,
          perMove: 1,
          pagination: false,
          breakpoints: {
            640: {
              perPage: 2,
              pagination: true,
            }
          }
        }} aria-label="React Splide Example">
          {isImage && <SplideSlide className="dg-product-card__large-image dg-product-card__desktop-v">
            <div>
              <img style={{ width: '-webkit-fill-available' }} src='https://www.dollargeneral.com/content/dam/dg/assets/homepage/by-fiscal-year/2025/week-51/web/January_CCFMedicineCabinet_Square.png' />
            </div>
          </SplideSlide>}
          {products.map((pro: any, index: any) => {
            return (
              <SplideSlide key={index}>
                <div className={"delivery-product-tile dg-product-card " + (isImage ? 'dg-product-card__image' : '')} data-product-upc={pro.upc} data-product-detail-page-path={"p/grown-in-idaho-crispy-potato-puffs-oz-bag/" + pro.upc} data-is-sellable={pro.isSellable} data-is-item-shippable={pro.isDeliverable} data-is-dgpickup-eligible={pro.isBopisEligible} data-state="small-card" data-pickup-deals-status={pro.dealsStatus} data-pickup-price={"$" + pro.finalPrice}>
                  <div aria-label="DG Product Card Details" className="dg-product-card__navigation-link" >
                    <div className="dg-product-card__product-image product-card__image-container">
                      <img className="product-card__image" alt="Grown in Idaho Crispy Potato Puffs, 28 oz Bag" loading="lazy" src={pro.image} />
                    </div>
                    <ProductInfo pro={pro} />
                    <AddToList pro={pro} onaddToList={addToList} onchangeQuantity={changeQuantity} />
                    <div className="delivery-stock product-card__availability-wrapper">
                      <div className="product-card__availability">
                        <img className="product-card__stock-icon hidden" src="https://www.dollargeneral.com/content/dam/dg/assets/icons/alert_icon.png" />
                        <label className="low-delivery-stock-not-sold-on-store product-card__stock-label normal-text"></label>
                      </div>

                    </div>
                  </div>
                  <CardDeals />
                  <div className="dg-product-card__sponsored">
                    <p>Sponsored</p>
                  </div>
                </div>
              </SplideSlide>
            )
          })}
        </Splide>}
      <div className='dg-product-card__banner-body'>
          <h2>Banner Text</h2>
      </div>
    </div >
  );
};

export default index;
