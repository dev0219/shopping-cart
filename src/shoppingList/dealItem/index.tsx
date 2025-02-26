import { useEffect, useState } from 'react';
import DealModal from '../modals/dealModal'

const index = ({ item, applied, offers, onaddCoupons }: any) => {

  const [expandMenu1, setExpandMenu1] = useState(false);
  const [expandMenu2, setExpandMenu2] = useState(false);
  const [applylist, setApplylist] = useState(applied);
  const offerlist = offers;
  const [availablelist, setAvailablelist] = useState([]);
  const [productObj, setProductobj] = useState({})
  const [isopen, setIsOpen] = useState(false);

  const filterData = () => {
    let availableLst = []
    if (item.length && applied.length) {
      for (var i = 0; i < item.length; i++) {
        let filteredApplyItem = applied.filter((applyitem: any) => applyitem.OfferCode == item[i].OfferCode);
        if (filteredApplyItem.length == 0) {
          availableLst.push(item[i])
        }
      }
    } else {
      availableLst = item
    }
    setAvailablelist(availableLst)
  }

  const addCoupons = (couponitem:any) => {
    let availableLst = [...availablelist];
    let applyLst = [...applylist];
    applyLst.push(couponitem);
    let newavailableLst = availableLst.filter((coupon) => coupon.OfferCode != couponitem.OfferCode);
    setAvailablelist(newavailableLst)
    setApplylist(applyLst);
    onaddCoupons(couponitem);
  }

  const modalView = (OfferCode: any, dealType: string) => {
    let product = {}
    if (dealType == 'offers') {
      product = offers.filter((prod: any) => prod.offerId == OfferCode)
    } else {
      product = item.filter((prod: any) => prod.OfferCode == OfferCode)
    }
    setProductobj({ ...product[0] })
    setIsOpen(true)
  }

  const onClosemodal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    filterData()
  }, [])

  return (
    <div>
      {applylist.length !== 0 &&
        <div
          className={
            expandMenu1 ? 'deals-item  open' : 'deals-item '
          }
        >
          <div
            className="shopping-list-item__deals-applied-toggle"
            onClick={() => setExpandMenu1(!expandMenu1)}
          >
            <div className="deal-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 29 28" version="1.1">
                <title>Icon-Deals</title>
                <g id="⤵️-(M)-Misc-assets" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="MIsc_Assets_01" transform="translate(-1754.000000, -800.000000)">
                    <g id="Group" transform="translate(1748.000000, 794.000000)">
                      <g transform="translate(5.550854, 6.235210)">
                        <path d="M10.5754532,3.99012989 L16.9819501,2.99595885 C17.863109,2.85921913 18.7283476,3.32233772 19.1032696,4.1313941 L21.7228714,9.78431905 C22.1130448,10.6262872 22.0916101,11.6014254 21.6648164,12.4254355 L15.1909336,24.9245537 C14.682923,25.9053692 13.475991,26.2886533 12.4951756,25.7806427 C12.4943842,25.7802328 12.4935931,25.7798224 12.4928023,25.7794114 L2.77232148,20.7282242 C1.79311234,20.2193843 1.41107528,19.0135858 1.91860573,18.0336973 L8.3716067,5.5748956 C8.81155194,4.72549382 9.63019231,4.13681706 10.5754532,3.99012989 Z" id="Rectangle-Copy-3" stroke="#000000" strokeWidth="2" fill="#FFFFFF" transform="translate(11.670711, 14.733940) rotate(361.000000) translate(-11.670711, -14.733940) " />
                        <path d="M16.2895974,2.22510254 L22.6960944,1.23093151 C23.5772532,1.09419179 24.4424919,1.55731037 24.8174138,2.36636676 L27.4370156,8.01929171 C27.8271891,8.86125981 27.8057543,9.83639806 27.3789606,10.6604082 L20.9050779,23.1595263 C20.3970673,24.1403418 19.1901353,24.5236259 18.2093198,24.0156153 C18.2085284,24.0152054 18.2077374,24.014795 18.2069466,24.0143841 L8.48646571,18.9631969 C7.50725657,18.4543569 7.12521951,17.2485585 7.63274997,16.26867 L14.0857509,3.80986826 C14.5256962,2.96046648 15.3443365,2.37178972 16.2895974,2.22510254 Z" id="Rectangle-Copy-2" stroke="#000000" strokeWidth="2" fill="#FFF000" transform="translate(17.384856, 12.968913) rotate(361.000000) translate(-17.384856, -12.968913) " />
                        <circle id="Oval-0-Copy" fill="#000000" transform="translate(21.449146, 5.764790) rotate(28.000000) translate(-21.449146, -5.764790) " cx="21.4491464" cy="5.76479039" r="2" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="shopping-list-item__deals-applied-toggle-label">Deals applied</div>
            <div className="arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="18px" width="18px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
              </svg>
            </div>
          </div>

          <div className={
            expandMenu1 ? 'shopping-list-item__deals-applied-list show' : 'shopping-list-item__deals-applied-list hidden '
          }>
            {applylist.map((child: any, index: number) => {
              return (
                <div key={index} className="product-deal">
                  <div className="product-deal__container-main">
                    <div className="product-deal__header">
                      <span className="product-deal__type">Coupon:</span>
                      <span className="product-deal__price">-${child.rewaredOfferValue.toFixed(2)}</span>
                    </div>
                    <span className="product-deal__description">{child.OfferSummary} {child.OfferDescription}</span>
                    <div className="product-deal__container-bottom">
                      <button className="product-deal__detail" type="button" onClick={() => modalView(child.OfferCode, 'applied')}>Details</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }

      {(availablelist.length !== 0 || offerlist.length !== 0) &&
        <div
          className={
            expandMenu2 ? 'deals-item  open' : 'deals-item '
          }
        >
          <div
            className="shopping-list-item__deals-available-toggle"
            onClick={() => setExpandMenu2(!expandMenu2)}
          >
            <div className="deal-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 29 28" version="1.1">
                <title>Icon-Deals</title>
                <g id="⤵️-(M)-Misc-assets" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="MIsc_Assets_01" transform="translate(-1754.000000, -800.000000)">
                    <g id="Group" transform="translate(1748.000000, 794.000000)">
                      <g transform="translate(5.550854, 6.235210)">
                        <path d="M10.5754532,3.99012989 L16.9819501,2.99595885 C17.863109,2.85921913 18.7283476,3.32233772 19.1032696,4.1313941 L21.7228714,9.78431905 C22.1130448,10.6262872 22.0916101,11.6014254 21.6648164,12.4254355 L15.1909336,24.9245537 C14.682923,25.9053692 13.475991,26.2886533 12.4951756,25.7806427 C12.4943842,25.7802328 12.4935931,25.7798224 12.4928023,25.7794114 L2.77232148,20.7282242 C1.79311234,20.2193843 1.41107528,19.0135858 1.91860573,18.0336973 L8.3716067,5.5748956 C8.81155194,4.72549382 9.63019231,4.13681706 10.5754532,3.99012989 Z" id="Rectangle-Copy-3" stroke="#000000" strokeWidth="2" fill="#FFFFFF" transform="translate(11.670711, 14.733940) rotate(361.000000) translate(-11.670711, -14.733940) " />
                        <path d="M16.2895974,2.22510254 L22.6960944,1.23093151 C23.5772532,1.09419179 24.4424919,1.55731037 24.8174138,2.36636676 L27.4370156,8.01929171 C27.8271891,8.86125981 27.8057543,9.83639806 27.3789606,10.6604082 L20.9050779,23.1595263 C20.3970673,24.1403418 19.1901353,24.5236259 18.2093198,24.0156153 C18.2085284,24.0152054 18.2077374,24.014795 18.2069466,24.0143841 L8.48646571,18.9631969 C7.50725657,18.4543569 7.12521951,17.2485585 7.63274997,16.26867 L14.0857509,3.80986826 C14.5256962,2.96046648 15.3443365,2.37178972 16.2895974,2.22510254 Z" id="Rectangle-Copy-2" stroke="#000000" strokeWidth="2" fill="#FFF000" transform="translate(17.384856, 12.968913) rotate(361.000000) translate(-17.384856, -12.968913) " />
                        <circle id="Oval-0-Copy" fill="#000000" transform="translate(21.449146, 5.764790) rotate(28.000000) translate(-21.449146, -5.764790) " cx="21.4491464" cy="5.76479039" r="2" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="shopping-list-item__deals-available-toggle-label">Deals available</div>
            <div className="arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="18px" width="18px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
              </svg>
            </div>
          </div>
          <div className={
            expandMenu2 ? 'shopping-list-item__deals-available-list show' : 'shopping-list-item__deals-available-list hidden '
          }>
            {availablelist.map((child: any, index: number) => {
              return (
                <div key={index} className="product-deal">
                  <div className="product-deal__hint">Add coupon to use</div>
                  <div className="product-deal__container-main">
                    <div className="product-deal__header">
                      <span className="product-deal__type">Coupon:</span>
                    </div>
                    <span className="product-deal__description">{child.OfferSummary} {child.OfferDescription}</span>
                    <div className="product-deal__container-bottom">
                      <button className="product-deal__detail" type="button" onClick={() => modalView(child.OfferCode, 'available')}>Details</button>
                      <button className="product-deal__add" onClick={() => addCoupons(child)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {offerlist.map((child: any, index: number) => {
              return (
                <div key={index} className="product-deal">
                  <div className="product-deal__hint">You're close, add more to unlock</div>
                  <div className="product-deal__container-main">
                    <div className="product-deal__header">
                      <span className="product-deal__type">Offer:</span>
                    </div>
                    <span className="product-deal__description">{child.description}</span>
                    <div className="product-deal__container-bottom">
                      <button className="product-deal__detail" type="button" onClick={() => modalView(child.offerId, 'offers')}>Details</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      }

      {isopen &&
        <DealModal productObj={productObj} closeModal={onClosemodal} />
      }
    </div>
  )
}

export default index;
