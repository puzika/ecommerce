import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategories, selectIsLoading } from '../../store/shop/shop.selector';
import { CategoriesContext } from '../../contexts/shop';
import Loader from '../../components/loader/loader.component';
import Product from '../../components/product/product.component';
import {
   ProductsStyles,
   ProductsHeadingStyles,
   ProductsContainerStyles
} from '../shop/shop.styles';


export default function CategoriesPreview() {
   // const { categories } = useContext(CategoriesContext);
   const categories = useSelector(selectCategories);
   const isLoading = useSelector(selectIsLoading);

   const categoriesArray = [...categories.entries()];

   return (
      <ProductsStyles>
         {
            isLoading ? (
               <Loader></Loader>
            ) : (
               categoriesArray.map(([title, items]) => (
               <div key={title}>
                  <Link to={`/shop/${title}`}><ProductsHeadingStyles>{title}</ProductsHeadingStyles></Link>
                  
                  <ProductsContainerStyles>
                     {
                        items.
                        filter((_, idx) => idx < 4).
                        map(p => (
                           <Product key={p.id} product={p}></Product>
                        ))
                     }
                  </ProductsContainerStyles>
               </div>
            ))
            )
         }
      </ProductsStyles>
   )
}