import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import XIcon from '../x-icon/x-icon.component';
import leftArrow from '../../assets/left-arrow.svg';
import rightArrow from '../../assets/right-arrow.svg';
import {
   CheckoutItemStyles,
   CheckoutItemImgStyles,
   CheckoutItemRemoveStyles,
   CheckoutItemQuantityStyles,
   CheckoutItemQuantityControlStyles
} from './checkout-item.styled';

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
      <CheckoutItemStyles>
         <div>
            <CheckoutItemImgStyles src={imageUrl} alt=""/>
         </div>
         <p>{name}</p>
         <CheckoutItemQuantityStyles>
            <CheckoutItemQuantityControlStyles src={leftArrow} onClick={handleDecrease} alt=""/>
            <p>{quantity}</p>
            <CheckoutItemQuantityControlStyles src={rightArrow} onClick={handleIncrease} alt="" />
         </CheckoutItemQuantityStyles>
         <p>{price}</p>
         <CheckoutItemRemoveStyles>
            <XIcon onClick={handleRemove}></XIcon>
         </CheckoutItemRemoveStyles>
      </CheckoutItemStyles>
   );
}