import { createSelector } from "reselect";

const selectCartReducer = state => state.cart;

export const selectCartIsOpen = createSelector(
   [selectCartReducer],
   cart => cart.isOpen,
);

export const selectCartItems = createSelector(
   [selectCartReducer],
   cart => cart.cartItems,
);

export const selectCartTotal = createSelector(
   [selectCartItems],
   cartItems => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
);

export const selectCartCount = createSelector(
   [selectCartItems],
   cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0),
);