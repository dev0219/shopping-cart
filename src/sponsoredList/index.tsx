import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './index.scss';
import AddToList from './addToList';
import SponsoredStaticData from '../data/sponsored.json'
import ProductInfo from './productInfo';
import productList from '../data/product.json';

import SponsoredCarousel from './sponsoredCarousel';
import SponsoredBanner from './sponsoredBanner';
import SponsoredCarouselBanner from './sponsoredCarouselBanner';

const index = () => {

  const [products, setProducts] = useState(SponsoredStaticData.placements[0].products)
  const [productsCartLst, setProductsCartLst] = useState(productList.products);

  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(1);
  const [val3, setVal3] = useState(1);

  const addToList = (pro: any) => {
    console.log("@@@ addToList product", pro.upc)
  }

  const changeQuantity = async (pro: any, key: number) => {
    let productCartList = productsCartLst;
    let updatedPrdocutList = []
    if (key < 0) {
      // decrease
      updatedPrdocutList = await Promise.all(productCartList.map(async (ref:any) => {
        if (ref.upc  == pro.upc) {
          ref.quantity =ref.quantity - 1
        }
        return ref;
      }))      
    } else {
      // increase
      updatedPrdocutList = await Promise.all(productCartList.map(async (ref:any) => {
        if (ref.upc  == pro.upc) {
          ref.quantity =ref.quantity + 1
        }
        return ref;
      }))
    }
    setProductsCartLst([...updatedPrdocutList])
    checkQunatity()
  }

  const checkQunatity = async () => {
    let sponsoredLst = products;
    let UpdatedsuponsoredLst = await Promise.all(sponsoredLst.map(async (ref:any) => {
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
    if (products.length > 0 &&  productsCartLst.length > 0) {
      checkQunatity()      
    }
  }, [])

  return (
    <div>
      {val1 && <SponsoredCarousel text="Sponsored Carousel"/>}
      {val2 && <SponsoredBanner text="Sponsored Banner" />}
      {val3 && <SponsoredCarouselBanner  text="Sponsored Carousel + Banner" />}
    </div >
  );
};

export default index;
