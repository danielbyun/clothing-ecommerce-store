import { TOGGLE_CART_HIDDEN } from "../types";

// we're not returning any payload
// look at what we're returning on cartReducer
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});
