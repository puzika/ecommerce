import { SHOP_ACTION_TYPES } from "./shop.types";

const INITIAL_STATE = {
   categories: [],
};

export function shopReducer(state = INITIAL_STATE, action) {
   const { type, payload } = action;

   switch (type) {
      case SHOP_ACTION_TYPES.SET_CATEGORIES:
         return {
            ...state,
            categories: payload,
         }
      default:
         return state;
   }
}