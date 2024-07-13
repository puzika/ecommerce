import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext({
   products: [],
   setProducts: () => null,
});

export function ProductsProvider({children}) {
   const [products, setProducts] = useState([]);
   const value = {products, setProducts};

   return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}