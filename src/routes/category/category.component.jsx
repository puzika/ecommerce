import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories, selectIsLoading } from "../../store/shop/shop.selector";
import Loader from "../../components/loader/loader.component";
import { CategoriesContext } from "../../contexts/shop";
import Product from "../../components/product/product.component";
import {
   ProductsHeadingStyles,
   ProductsContainerStyles
} from "../shop/shop.styles";

export default function Category() {
   const {category} = useParams();
   const categories = useSelector(selectCategories);
   const isLoading = useSelector(selectIsLoading);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      setProducts(categories.get(category));
   }, [category, categories]);

   return (
      <>
         <ProductsHeadingStyles>{category}</ProductsHeadingStyles>
                  
         <ProductsContainerStyles>
            {
               isLoading ? (
                  <Loader></Loader>
               ) : (
                  products && products.map(p => (
                     <Product key={p.id} product={p}></Product>
                  ))
               )
            }
         </ProductsContainerStyles>
      </>
   )
}