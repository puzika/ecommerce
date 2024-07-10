import { createContext, useState } from "react";
import Cart from "../components/cart/cart";

export const CartContext = createContext({
   isOpen: false,
   setCartState: () => null,
});

export function CartProvider({children}) {
   const [isOpen, setCartState] = useState(false);
   const value = {isOpen, setCartState};

   return (
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
   )
}