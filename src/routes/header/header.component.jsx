import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user";
import { signOutAuthUser } from "../../utils/firebase";
import CrownLogo from '../../assets/crown.svg';
import Cart from "../../components/cart/cart.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
   HeaderStyles,
   HeaderNavigationStyles,
   HeaderNavLinkStyles,
   HeaderLogoStyles
} from "./header.styles";

export default function Header() {
   const { currentUser } = useContext(UserContext);

   async function handClick() {
      await signOutAuthUser();
   }
   
   return (
      <>
         <HeaderStyles>
            <Link to={'/'}>
               <HeaderLogoStyles src={CrownLogo} alt="logo" />
            </Link>
            <HeaderNavigationStyles>
               <HeaderNavLinkStyles to={'/shop'}>Shop</HeaderNavLinkStyles>
               {
                  currentUser ? (
                     <HeaderNavLinkStyles as={'span'} onClick={handClick}>Sign out</HeaderNavLinkStyles>
                  ) : (
                     <HeaderNavLinkStyles to={'/auth'}>Sign in</HeaderNavLinkStyles>
                  )
               }
               <Cart></Cart>
            </HeaderNavigationStyles>
            <CartDropdown></CartDropdown>
         </HeaderStyles>

         <Outlet></Outlet>
      </>
   )
}