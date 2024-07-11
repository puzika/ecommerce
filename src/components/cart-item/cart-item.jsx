import './cart-item.scss';

export default function CartItem({product}) {
   const {imageUrl, name, price, quantity} = product;

   return (
      <div className="cart-item">
         <img src={imageUrl} alt="" className="cart-item__img" />
         <div className="cart-item__details">
            <p>{name}</p>
            <p>{quantity} x ${price}</p>
         </div>
      </div>
   );
}