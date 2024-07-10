import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user";
import { signOutAuthUser } from "../../utils/firebase";
import CrownLogo from '../../assets/crown.svg';
import Cart from "../../components/cart/cart";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import "./header.scss";

export default function Header() {
   const { currentUser } = useContext(UserContext);

   async function handClick() {
      await signOutAuthUser();
   }
   
   return (
      <>
         <header className="header">
            <Link className="header__logo" to={'/'}>
               <img className="header__logo-img" src={CrownLogo} alt="logo" />
            </Link>
            <nav className="header__nav">
               <Link className="header__nav-link" to={'/shop'}>Shop</Link>
               {
                  currentUser ? (
                     <span onClick={handClick} className="header__nav-link">Sign out</span>
                  ) : (
                     <Link className="header__nav-link" to={'/auth'}>Sign in</Link>
                  )
               }
               <Cart></Cart>
            </nav>
            <CartDropdown></CartDropdown>
         </header>

         <Outlet></Outlet>
      </>
   )
}