import { Outlet, Link } from "react-router-dom";
import CrownLogo from '../../assets/crown.svg';
import "./header.scss";

export default function Header() {
   return (
      <>
         <header className="header">
            <Link className="header__logo" to={'/'}>
               <img className="header__logo-img" src={CrownLogo} alt="logo" />
            </Link>
            <nav className="header__nav">
               <Link className="header__nav-link" to={'/shop'}>Shop</Link>
            </nav>
         </header>

         <Outlet></Outlet>
      </>
   )
}