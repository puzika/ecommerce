import './checkout-item.scss';

export default function CheckoutItem({product}) {
   const { imageUrl, quantity, price, name} = product;

   return (
      <div className="checkout-item">
         <div>
            <img src={imageUrl} alt="" className="checkout-item__img" />
         </div>
         <p>{name}</p>
         <div className="checkout-item__quantity">
            <p>{quantity}</p>
         </div>
         <p>{price}</p>
         <p>remove</p>
      </div>
   );
}