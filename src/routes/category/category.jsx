import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/shop";
import Product from "../../components/product/product";

export default function Category() {
   const {category} = useParams();
   const {categories} = useContext(CategoriesContext);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      setProducts(categories.get(category));
   }, [category, categories]);

   return (
      <>
         <h1 className='products__heading'>{category}</h1>
                  
         <div className="products__container">
            {
               products && products.map(p => (
                  <Product key={p.id} product={p}></Product>
               ))
            }
         </div>
      </>
   )
}