import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button, { ButtonStyleTypes } from '../button/button.component';
import { ProductStyles, ProductImageStyles, ProductDetailsStyles } from './product.styles';

export default function Product({product}) {
   const {imageUrl, name, price} = product;
   // const {addItem} = useContext(CartContext);

   // function handleClick() {
   //    addItem(product);
   // }

   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   function handleClick() {
      dispatch(addItem(cartItems, product));
   }

   return (
      <ProductStyles>
         <ProductImageStyles style={{backgroundImage: `url(${imageUrl})`}}>
            <Button onClick={handleClick} styleType={ButtonStyleTypes.inverse} text={'Add to cart'}></Button>
         </ProductImageStyles>
         <ProductDetailsStyles>
            <p>{name}</p>
            <p>{price}</p>
         </ProductDetailsStyles>
      </ProductStyles>
   )
}