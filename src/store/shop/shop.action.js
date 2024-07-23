import { SHOP_ACTION_TYPES } from "./shop.types";
import { getCategoriesAndDocuments } from "../../utils/firebase";

// export function setCategories(categories) {
//    return { type: SHOP_ACTION_TYPES.SET_CATEGORIES, payload: categories };
// }

export function fetchCategoriesStart() {
   return { type: SHOP_ACTION_TYPES.FETCH_CATEGORIES_START, payload: null };
}

export function fetchCategoriesSuccess(categories) {
   return { type: SHOP_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categories };
}

export function fetchCategoriesFailure(error) {
   return { type: SHOP_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, payload: error };
}

export function fetchCategoriesAsync() {
   return async function (dispatch) {
      dispatch(fetchCategoriesStart());

      try {
         const categories = await getCategoriesAndDocuments();
         dispatch(fetchCategoriesSuccess(categories));
      } catch (error) {
         dispatch(fetchCategoriesFailure(error));
      }
   }
}