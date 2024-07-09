import { createContext, useState } from "react";
import DATA_SHOP from '../shop-data.json';

export const ProductContext = createContext({
   products: [],
   setProducts: () => null,
});

export function ProductsProvider({children}) {
   const [products, setProducts] = useState(DATA_SHOP);
   const value = {products, setProducts};

   return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}