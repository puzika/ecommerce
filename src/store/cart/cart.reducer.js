import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
   isOpen: false,
   cartItems: [],
}

export function cartReducer(state = INITIAL_STATE, action) {
   const { type, payload } = action;

   switch (type) {
      case CART_ACTION_TYPES.SET_CART_ITEMS:
         return {
            ...state,
            cartItems: payload,
         };
      case CART_ACTION_TYPES.SET_CART_STATE:
         return {
            ...state,
            isOpen: payload,
         }
      default:
         return state;
   }
}