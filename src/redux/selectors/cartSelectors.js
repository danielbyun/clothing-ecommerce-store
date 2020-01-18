import { createSelector } from "reselect";

// two types of selectors
// 1: input selector that doesn't use create selector
// 2: output selector that does use create selector and input selector

// input selector
// function that gets the state and returns a slice of it (one layer deep usually)
const selectCart = state => state.cart;

// uses create selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accmulatedQuantity, cartItem) => accmulatedQuantity + cartItem.quantity,
      0
    )
);
