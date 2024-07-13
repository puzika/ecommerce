import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
   categories: new Map(),
   setCategories: () => null,
});

export function CategoriesProvider({children}) {
   const [categories, setCategories] = useState(new Map());
   const value = {categories, setCategories};

   useEffect(() => {
      async function getCategories() {
         const categories = await getCategoriesAndDocuments();
         setCategories(categories);
      }

      getCategories();
   }, []);

   return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}