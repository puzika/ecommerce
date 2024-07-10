import { useContext } from 'react';
import './cart.scss';
import BagIcon from '../../assets/bag-icon.svg';
import { CartContext } from '../../contexts/cart';

export default function Cart() {
   const {isOpen, setCartState} = useContext(CartContext);

   function handleClick() {
      setCartState(!isOpen);
   }

   return (
      <div onClick={handleClick} className='cart'>
         <img className="cart__img" src={BagIcon} alt="bag icon" />
         <span className="cart__items">0</span>
      </div>
   )
}