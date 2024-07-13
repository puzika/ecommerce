import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/shop';
import Product from '../../components/product/product';
import './shop.scss';

export default function Shop() {
   const { categories } = useContext(CategoriesContext);
   const categoriesArray = [...categories.entries()];

   return (
      <div className="products">
         {
            categoriesArray.map(([title, items]) => (
               <div key={title}>
                  <h1 className='products__heading'>{title}</h1>
                  
                  <div className="products__container">
                     {
                        items.map(p => (
                           <Product key={p.id} product={p}></Product>
                        ))
                     }
                  </div>
               </div>
            ))
         }
      </div>
   )
}