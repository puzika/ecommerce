import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CategoriesContext } from "../../contexts/shop";
import Product from "../../components/product/product.component";
import {
   ProductsHeadingStyles,
   ProductsContainerStyles
} from "../shop/shop.styles";

export default function Category() {
   const {category} = useParams();
   const categories = useSelector(state => state.shop.categories);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      setProducts(categories.get(category));
   }, [category, categories]);

   return (
      <>
         <ProductsHeadingStyles>{category}</ProductsHeadingStyles>
                  
         <ProductsContainerStyles>
            {
               products && products.map(p => (
                  <Product key={p.id} product={p}></Product>
               ))
            }
         </ProductsContainerStyles>
      </>
   )
}