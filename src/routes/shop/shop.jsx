import { useContext } from 'react';
import { ProductContext } from '../../contexts/shop';
import Product from '../../components/product/product';
import './shop.scss';

export default function Shop() {
   const { products } = useContext(ProductContext);

   return (
      <div className="products">
         <h1 className='products__heading'>Sneakers</h1>
         
         <div className="products__container">
            {
               products.map(p => (
                  <Product key={p.id} product={p}></Product>
               ))
            }
         </div>
      </div>
   )
}