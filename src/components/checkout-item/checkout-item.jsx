import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import XIcon from '../x-icon/x-icon';
import './checkout-item.scss';

export default function CheckoutItem({product}) {
   const { imageUrl, quantity, price, name} = product;
   const {removeItem} = useContext(CartContext);

   function handleRemove() {
      removeItem(product);
   }

   return (
      <div className="checkout-item">
         <div>
            <img src={imageUrl} alt="" className="checkout-item__img" />
         </div>
         <p>{name}</p>
         <div className="checkout-item__quantity">
            <p>{quantity}</p>
         </div>
         <p>{price}</p>
         <div className='checkout-item__remove'><XIcon onClick={handleRemove}></XIcon></div>
      </div>
   );
}