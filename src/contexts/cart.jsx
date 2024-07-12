import { createContext, useEffect, useState } from "react";
import Cart from "../components/cart/cart";

export const CartContext = createContext({
   isOpen: false,
   setCartState: () => null,
   cartItems: [],
   removeProduct: () => null,
   addItem: () => null,
   removeItem: () => null,
   cartCount: 0,
});

export function CartProvider({children}) {
   const [isOpen, setCartState] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [cartCount, setCartCount] = useState(0);

   useEffect(() => {
      const newCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
      setCartCount(newCount);
   }, [cartItems]);

   function addItem(product) {
      let exists = false;

      const items = cartItems.map(item => {
         if (item.id === product.id) {
            exists = true;
            return { ...item, quantity: item.quantity + 1};
         } else return item;
      });

      const newItems = exists ? items : [...cartItems, {...product, quantity: 1}];

      setCartItems(() => newItems);
   }

   function removeItem(product) {
      const items = [];

      for (const item of cartItems) {
         if (item.id === product.id) {
            const quantity = item.quantity - 1;
            
            if (quantity !== 0) items.push({...item, quantity});
         } else {
            items.push(item);
         }
      }

      setCartItems(items);
   }

   function removeProduct(product) {
      const newItems = cartItems.filter(item => item.id !== product.id);

      setCartItems(newItems);
   }

   const value = {isOpen, setCartState, cartItems, addItem, cartCount, removeProduct, removeItem};

   return (
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
   )
}