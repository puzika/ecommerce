import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import Button from '../button/button';
import './cart-dropdown.scss';

export default function CartDropdown() {
   const {isOpen} = useContext(CartContext);

   return (
      <div className={`dropdown ${isOpen ? '' : 'dropdown--hidden'}`}>
         <div className="dropdown__items">

         </div>
         <Button text='Go to checkout'></Button>
      </div>
   )
}