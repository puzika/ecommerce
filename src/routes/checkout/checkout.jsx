import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import './checkout.scss';

export default function Checkout() {
   const {cartItems, totalCost} = useContext(CartContext);

   return (
      <div className="checkout">
         {
            cartItems.length ? (
               <>
                  <div className="checkout__column-titles">
                     <p>Product</p>
                     <p>Description</p>
                     <p>Quantity</p>
                     <p>Price</p>
                     <p>Remove</p>
                  </div>
                  {
                     cartItems.map(item => (
                        <CheckoutItem product={item}></CheckoutItem>
                     ))
                  }
                  <p className='checkout__total'>total: ${totalCost}</p>
               </>
            ) : (
               <p>No items to check out</p>
            )
         }
      </div>
   );
}