import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import XIcon from '../x-icon/x-icon';
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'
import './checkout-item.scss';

export default function CheckoutItem({product}) {
   const { imageUrl, quantity, price, name} = product;
   const {removeProduct, addItem, removeItem} = useContext(CartContext);

   function handleRemove() {
      removeProduct(product);
   }

   function handleIncrease() {
      addItem(product);
   }

   function handleDecrease() {
      removeItem(product);
   }

   return (
      <div className="checkout-item">
         <div>
            <img src={imageUrl} alt="" className="checkout-item__img" />
         </div>
         <p>{name}</p>
         <div className="checkout-item__quantity">
            <img src={leftArrow} onClick={handleDecrease} alt="" className="checkout-item__quantity-control" />
            <p>{quantity}</p>
            <img src={rightArrow} onClick={handleIncrease} alt="" className="checkout-item__quantity-control" />
         </div>
         <p>{price}</p>
         <div className='checkout-item__remove'><XIcon onClick={handleRemove}></XIcon></div>
      </div>
   );
}