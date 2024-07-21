import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartIsOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setCartState } from '../../store/cart/cart.action';
import BagIcon from '../../assets/bag-icon.svg';
import { CartContext } from '../../contexts/cart';
import {
   CartStyles,
   CartImgStyles,
   CartItemsStyles
} from './cart.styles';

export default function Cart() {
   // const {isOpen, cartCount, setCartState} = useContext(CartContext);

   // function handleClick() {
   //    setCartState(!isOpen);
   // }
   const isOpen = useSelector(selectCartIsOpen);
   const cartCount = useSelector(selectCartCount);
   const dispatch = useDispatch();

   function handleClick() {
      dispatch(setCartState(!isOpen));
   }

   return (
      <CartStyles onClick={handleClick}>
         <CartImgStyles src={BagIcon} alt="bag icon" />
         <CartItemsStyles>{cartCount}</CartItemsStyles>
      </CartStyles>
   )
}