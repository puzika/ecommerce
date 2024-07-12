import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart';
import CartItem from '../cart-item/cart-item';
import Button from '../button/button';
import './cart-dropdown.scss';

export default function CartDropdown() {
   const {isOpen, cartItems} = useContext(CartContext);

   return (
      <div className={`dropdown ${isOpen ? '' : 'dropdown--hidden'}`}>
         <div className="dropdown__items">
            {
               cartItems.length ? 
               cartItems.map(item => (
                  <CartItem product={item}></CartItem>
               )) : (
                  <p>No items</p>
               )
            }
         </div>
         <Link to='/checkout'><Button text='Go to checkout'></Button></Link>
      </div>
   )
}