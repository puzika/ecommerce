import { SHOP_ACTION_TYPES } from "./shop.types";

const INITIAL_STATE = {
   categories: [],
   isLoading: false,
   error: null,
};

export function shopReducer(state = INITIAL_STATE, action) {
   const { type, payload } = action;

   switch (type) {
      case SHOP_ACTION_TYPES.FETCH_CATEGORIES_START:
         return {
            ...state,
            isLoading: true,
         };
      case SHOP_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
         return {
            ...state,
            categories: payload,
            isLoading: false,
         };
      case SHOP_ACTION_TYPES.FETCH_CATEGORIES_FAILURE:
         return {
            ...state,
            error: payload,
            isLoading: false
         }
      default:
         return state;
   }
}