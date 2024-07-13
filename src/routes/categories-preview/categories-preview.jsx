import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/shop';
import Product from '../../components/product/product';


export default function CategoriesPreview() {
   const { categories } = useContext(CategoriesContext);
   const categoriesArray = [...categories.entries()];

   return (
      <div className="products">
         {
            categoriesArray.map(([title, items]) => (
               <div key={title}>
                  <Link to={`/shop/${title}`}><h1 className='products__heading'>{title}</h1></Link>
                  
                  <div className="products__container">
                     {
                        items.
                        filter((_, idx) => idx < 4).
                        map(p => (
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