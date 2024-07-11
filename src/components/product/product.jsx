import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import Button from '../button/button';
import './product.scss';

export default function Product({product}) {
   const {imageUrl, name, price} = product;
   const {addItem, cartItems} = useContext(CartContext);

   function handleClick() {
      addItem(product);
   }

   return (
      <div className="product">
         <div style={{backgroundImage: `url(${imageUrl})`}} className="product__img">
            <Button onClick={handleClick} styleType={'inverse'} text={'Add to cart'}></Button>
         </div>
         <div className="product__details">
            <p className="product__name">{name}</p>
            <p className="product__price">{price}</p>
         </div>
      </div>
   )
}