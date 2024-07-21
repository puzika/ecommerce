import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartIsOpen, selectCartItems } from '../../store/cart/cart.selector';
import { CartContext } from '../../contexts/cart';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { DropdownStyles, DropdownItemStyles} from './cart-dropdown.styles';

export default function CartDropdown() {
   // const {isOpen, cartItems} = useContext(CartContext);
   const isOpen = useSelector(selectCartIsOpen);
   const cartItems = useSelector(selectCartItems);

   return (
      <DropdownStyles $isOpen={isOpen}>
         <DropdownItemStyles>
            {
               cartItems.length ? 
               cartItems.map(item => (
                  <CartItem key={item.id} product={item}></CartItem>
               )) : (
                  <p>No items</p>
               )
            }
         </DropdownItemStyles>
         <Link to='/checkout'><Button text='Go to checkout'></Button></Link>
      </DropdownStyles>
   )
}