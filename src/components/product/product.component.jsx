import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import Button, { ButtonStyleTypes } from '../button/button.component';
import { ProductStyles, ProductImageStyles, ProductDetailsStyles } from './product.styles';

export default function Product({product}) {
   const {imageUrl, name, price} = product;
   const {addItem} = useContext(CartContext);

   function handleClick() {
      addItem(product);
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