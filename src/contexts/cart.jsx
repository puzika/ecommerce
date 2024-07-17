import { createContext, useEffect, useReducer, useState } from "react";

export const CartContext = createContext({
   isOpen: false,
   setCartState: () => null,
   cartItems: [],
   removeProduct: () => null,
   addItem: () => null,
   removeItem: () => null,
   totalCost: 0,
   cartCount: 0,
});

export const CART_ACTION_TYPES = {
   SET_CART_ITEMS: 'SET_CART_ITEMS',
   SET_CART_STATE: 'SET_CART_STATE',
}

function cartReducer(state, action) {
   const {type, payload} = action;
   console.log('dispatched');

   switch (type) {
      case CART_ACTION_TYPES.SET_CART_ITEMS:
         return {
            ...state,
            ...payload,
         };
      case CART_ACTION_TYPES.SET_CART_STATE:
         return {
            ...state,
            isOpen: payload,
         };
      default:
         throw new Error(`unhandled type ${type} in cartReducer`);
   }
}

const INITIAL_STATE = {
   isOpen: false,
   cartItems: [],
   totalCost: 0,
   cartCount: 0,
}

export function CartProvider({children}) {
   const [ { isOpen, cartItems, totalCost, cartCount }, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
   // const [isOpen, setCartState] = useState(false);
   // const [cartItems, setCartItems] = useState([]);
   // const [cartCount, setCartCount] = useState(0);
   // const [totalCost, setTotalCost] = useState(0);

   // useEffect(() => {
      // let newCount = 0;
      // let newTotalCost = 0;

      // for (const item of cartItems) {
      //    newCount += item.quantity;
      //    newTotalCost += item.quantity * item.price;
      // }

   //    setCartCount(newCount);
   //    setTotalCost(newTotalCost);
   // }, [cartItems]);

   function updateCart(newCartItems) {
      let newCount = 0;
      let newTotalCost = 0;

      for (const item of newCartItems) {
         newCount += item.quantity;
         newTotalCost += item.quantity * item.price;
      }

      dispatch({
         type: CART_ACTION_TYPES.SET_CART_ITEMS,
         payload: {
            cartItems: newCartItems,
            totalCost: newTotalCost,
            cartCount: newCount,
         }
      });
   }

   function addItem(product) {
      let exists = false;

      const items = cartItems.map(item => {
         if (item.id === product.id) {
            exists = true;
            return { ...item, quantity: item.quantity + 1};
         } else return item;
      });

      const newItems = exists ? items : [...cartItems, {...product, quantity: 1}];

      updateCart(newItems);
   }

   function removeItem(product) {
      const newItems = [];

      for (const item of cartItems) {
         if (item.id === product.id) {
            const quantity = item.quantity - 1;
            
            if (quantity !== 0) newItems.push({...item, quantity});
         } else {
            newItems.push(item);
         }
      }

      updateCart(newItems);
   }

   function removeProduct(product) {
      const newItems = cartItems.filter(item => item.id !== product.id);

      updateCart(newItems);
   }

   function setCartState() {
      dispatch({
         type: 'SET_CART_STATE',
         payload: !isOpen,
      });
   }

   const value = {isOpen, setCartState, cartItems, addItem, cartCount, removeProduct, removeItem, totalCost};

   return (
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
   )
}