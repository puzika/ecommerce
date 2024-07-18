import { SHOP_ACTION_TYPES } from "./shop.types";

export function setCategories(categories) {
   return { type: SHOP_ACTION_TYPES.SET_CATEGORIES, payload: categories };
}