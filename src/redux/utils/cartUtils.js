// look inside the cart to see if the cart item adding exists already
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // if exists
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // default
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemtoRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemtoRemove.id
  );

  // when it's one
  if (existingCartItem.quantity === 1) {
    // remove the id that's being removed
    return cartItems.filter(cartItem => cartItem.id !== cartItemtoRemove.id);
  }

  return cartItems.map(cartItem =>
    // if it's the same
    cartItem.id === cartItemtoRemove.id
      ? // remove it and decrease the quantity count
        { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
