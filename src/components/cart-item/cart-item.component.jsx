import { 
   CartItemStyles, 
   CartItemImgStyles, 
   CartItemDetailsStyles
} from './cart-item.styles';

export default function CartItem({product}) {
   const {imageUrl, name, price, quantity} = product;

   return (
      <CartItemStyles>
         <CartItemImgStyles src={imageUrl} alt=""/>
         <CartItemDetailsStyles>
            <p>{name}</p>
            <p>{quantity} x ${price}</p>
         </CartItemDetailsStyles>
      </CartItemStyles>
   );
}