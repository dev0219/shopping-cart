import productJsonStaticData from '../data/product.json';
import { useEffect, useState } from 'react';
import './index.scss';
import DealItem from './dealItem';
import ListSummary from './listSummary';
import AddToCart from './addToCart';
import ActionModal from './modals/actionModal'

const index = () => {

  const [products, setProducts] = useState(productJsonStaticData.products);
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [uncheckedProducts, setUnCheckedProducts] = useState([]);
  const [movedItems, setMovedItems] = useState([]);
  const [shoppinglist, setShoppingList] = useState(productJsonStaticData);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [modalHeader, setModalHeader] = useState('');

  const linkDetail = (upc: any) => {
    console.log("--- upc", upc)
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const changeQuantity = (pro: any, type: string) => {
    if (pro.isChecked) {
      setIsModalOpen(true)
      setModalHeader("Oops, a checked off item can't be edited. Do you want to add it back to your list?")
      setIsDeleteModal(false)
    } else {
      let productsLst = [...products];
      const productIndex = productsLst.findIndex((item) => item.listItemId === pro.listItemId);
      if (productIndex !== -1) {
        let currentProduct = { ...productsLst[productIndex] };
        if (type === 'increase') {
          currentProduct.quantity++;
          productsLst[productIndex] = currentProduct;
        } else if (currentProduct.quantity > 1) {
          currentProduct.quantity--;
          productsLst[productIndex] = currentProduct;
        } else if (currentProduct.quantity == 1) {
          productsLst = productsLst.filter((item) => item.listItemId != pro.listItemId)
        }
        setProducts(productsLst);
      }
    }

  };


  const closeItem = (pro: any) => {
    let productsLst = [...products]
    productsLst = productsLst.filter((item) => item.listItemId != pro.listItemId)
    setProducts(productsLst)
  }

  const moveToCart = (pro: any) => {
    let items = [...movedItems];
    items.push(pro.listItemId);
    setMovedItems(items);
  }

  const undoMoved = (pro: any) => {
    let items = [...movedItems];
    items = items.filter((item) => item != pro.listItemId);
    setMovedItems(items);
  }

  const addCoupons = (coupon: any) => {
    let shopData = { ...shoppinglist };
    shopData.total = shopData.total - 1;
    shopData.totalCouponsApplied = shopData.totalCouponsApplied - 1.5;
    shopData.subtotal = shopData.subtotal - 0.5;
    setShoppingList(shopData)
  }

  const checkProduct = (pro: any, checked: any) => {
    let productsLst = [...products];
    const productIndex = productsLst.findIndex((item) => item.listItemId === pro.listItemId);
    if (productIndex !== -1) {
      let currentProduct = { ...productsLst[productIndex] };
      if (checked) {
        currentProduct.isChecked = 1;
      } else {
        currentProduct.isChecked = 0;
      }
      productsLst[productIndex] = currentProduct;
      setProducts(productsLst);
    }
  }

  const onhandleModal = () => {
    if (!isModalOpen) {
      setModalHeader("Delete checked off items?")
      setIsDeleteModal(true)
    }
    setIsModalOpen(!isModalOpen)
  }

  const onConfirmed = () => {
    setIsModalOpen(false)
  }


  useEffect(() => {
    const filterData = () => {
      let checkedProducts = [...products]
      let uncheckedProducts = [...products]
      checkedProducts = products.filter((item) => item.isChecked == 1);
      uncheckedProducts = products.filter((item) => item.isChecked == 0);
      setCheckedProducts(checkedProducts)
      setUnCheckedProducts(uncheckedProducts)
    }
    filterData()
  }, [products])

  return (
    <div className="dg-shopping-list">
      <div className='shopping-lists'>
        <ul>
          {uncheckedProducts.map((pro: any, index: any) => {
            return (
              <li key={index} className="shopping-list-item">
                <AddToCart pro={pro} index={index} onchangeQuantity={changeQuantity} oncloseItem={closeItem} onmoveItem={moveToCart} onlinkDetail={linkDetail} oncheckProduct={checkProduct} />
                {pro.allDeals.coupons.length != 0 &&
                  <DealItem key={"deal-item" + index} item={pro.allDeals.coupons} applied={pro.dealsApplied.coupons} offers={pro.allDeals.offers} onaddCoupons={addCoupons} />
                }
                {movedItems.includes(pro.listItemId) && <div className='item-moved-cart-container'><span>Item moved to your cart</span><button type='button' onClick={() => undoMoved(pro)}>Undo</button></div>}
              </li>
            )
          })}
        </ul>
        <div className='checked-shopping-list'>
          <details onToggle={handleToggle}>
            <summary>
              <div className='checked-items-header'>
                <p>Checked off items</p>
                <svg className="custom-icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="14px" width="14px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve">
                  <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  
                          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  
                          C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  
                          C255,161.018,253.42,157.202,250.606,154.389z"
                    stroke="#000000"
                    strokeWidth="20"
                    fill="#000000" />
                </svg>
              </div>
              {isOpen && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3477eb" className="bi bi-trash" viewBox="0 0 16 16" onClick={() => onhandleModal()}>
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>}
              {(!isOpen && checkedProducts.length > 0) && <div className="sum-checked-off">
                {checkedProducts.length > 0 && <span>${checkedProducts.reduce((n, { finalPrice }) => n + finalPrice, 0)} </span>}
              </div>}
            </summary>
            <ul>
              {checkedProducts.map((pro: any, index: any) => {
                return (
                  <li key={index} className="shopping-list-item">
                    <AddToCart pro={pro} index={index} onchangeQuantity={changeQuantity} oncloseItem={closeItem} onmoveItem={moveToCart} onlinkDetail={linkDetail} oncheckProduct={checkProduct} />
                    {pro.allDeals.coupons.length != 0 &&
                      <DealItem key={"deal-item" + index} item={pro.allDeals.coupons} applied={pro.dealsApplied.coupons} offers={pro.allDeals.offers} onaddCoupons={addCoupons} />
                    }
                    {movedItems.includes(pro.listItemId) && <div className='item-moved-cart-container'><span>Item moved to your cart</span><button type='button' onClick={() => undoMoved(pro)}>Undo</button></div>}
                  </li>
                )
              })}
            </ul>
          </details>
        </div>
      </div>
      <ListSummary items={shoppinglist} />
      {isModalOpen &&
        <ActionModal modalHeader={modalHeader} handleModal={onhandleModal} Confirmed={onConfirmed} isDeleteModal={isDeleteModal}/>
      }
    </div >
  );
};

export default index;
