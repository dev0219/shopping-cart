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

  const [largeImage, setLargeImage] = useState(true)
  const [imageText, setImageText] = useState(false)
  const [smallImage, setSmallImage] = useState(false)

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
    <div style={{ padding: '5% 20%' }}>
      <div className='dg-product-card__sponsored-header-title'><hr></hr><h2> {text}</h2><hr></hr></div>

      {products.length > 0 &&
        <Splide options={{
          rewind: true,
          type: 'loop',
          perPage: 5,
          perMove: 1,
          pagination: false,
          breakpoints: {
            640: {
              perPage: 1
            }
          }
        }} aria-label="React Splide Example">
          {largeImage && <SplideSlide className="dg-product-card__large-image">
            <div>
              <img style={{ width: '-webkit-fill-available' }} src='https://www.dollargeneral.com/content/dam/dg/assets/homepage/by-fiscal-year/2025/week-51/web/January_CCFMedicineCabinet_Square.png' />
            </div>
          </SplideSlide>}
          {products.map((pro: any, index: any) => {
            return (
              <SplideSlide key={index}>
                <div className="delivery-product-tile dg-product-card" data-product-upc={pro.upc} data-product-detail-page-path={"p/grown-in-idaho-crispy-potato-puffs-oz-bag/" + pro.upc} data-is-sellable={pro.isSellable} data-is-item-shippable={pro.isDeliverable} data-is-dgpickup-eligible={pro.isBopisEligible} data-state="small-card" data-pickup-deals-status={pro.dealsStatus} data-pickup-price={"$" + pro.finalPrice}>
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
    </div >
  );
};

export default index;
