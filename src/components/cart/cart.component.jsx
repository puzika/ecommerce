import { useContext } from 'react';
import BagIcon from '../../assets/bag-icon.svg';
import { CartContext } from '../../contexts/cart';
import {
   CartStyles,
   CartImgStyles,
   CartItemsStyles
} from './cart.styles';

export default function Cart() {
   const {isOpen, cartCount, setCartState} = useContext(CartContext);

   function handleClick() {
      setCartState(!isOpen);
   }

   return (
      <CartStyles onClick={handleClick}>
         <CartImgStyles src={BagIcon} alt="bag icon" />
         <CartItemsStyles>{cartCount}</CartItemsStyles>
      </CartStyles>
   )
}