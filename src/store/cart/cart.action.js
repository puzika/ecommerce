import { CART_ACTION_TYPES } from "./cart.types";

export function setCartState(currentCartState) {
   return { type: CART_ACTION_TYPES.SET_CART_STATE, payload: currentCartState };
}

export function addItem(cartItems, product) {
   let exists = false;

   const items = cartItems.map(item => {
      if (item.id === product.id) {
         exists = true;
         return { ...item, quantity: item.quantity + 1 };
      } else return item;
   });

   const newItems = exists ? items : [...cartItems, { ...product, quantity: 1 }];

   return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newItems };
}

export function removeItem(cartItems, product) {
   const newItems = [];

   for (const item of cartItems) {
      if (item.id === product.id) {
         const quantity = item.quantity - 1;

         if (quantity !== 0) newItems.push({ ...item, quantity });
      } else {
         newItems.push(item);
      }
   }

   return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newItems };
}

export function removeProduct(cartItems, product) {
   const newItems = cartItems.filter(item => item.id !== product.id);

   return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newItems };
}