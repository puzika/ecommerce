import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
   CheckoutStyles,
   CheckoutColumnTitleStyles,
   CheckoutTotalCostStyles
} from './checkout.styles';

export default function Checkout() {
   const {cartItems, totalCost} = useContext(CartContext);

   return (
      <CheckoutStyles>
         {
            cartItems.length ? (
               <>
                  <CheckoutColumnTitleStyles>
                     <p>Product</p>
                     <p>Description</p>
                     <p>Quantity</p>
                     <p>Price</p>
                     <p>Remove</p>
                  </CheckoutColumnTitleStyles>
                  {
                     cartItems.map(item => (
                        <CheckoutItem key={item.id} product={item}></CheckoutItem>
                     ))
                  }
                  <CheckoutTotalCostStyles>total: ${totalCost}</CheckoutTotalCostStyles>
               </>
            ) : (
               <p>No items to check out</p>
            )
         }
      </CheckoutStyles>
   );
}