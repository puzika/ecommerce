import './cart.scss';
import BagIcon from '../../assets/bag-icon.svg';

export default function Cart() {
   return (
      <div className="cart">
         <img className="cart__img" src={BagIcon} alt="bag icon" />
         <span className="cart__items">0</span>
      </div>
   )
}