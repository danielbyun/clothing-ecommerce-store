import React from "react";

import "./CartItem.scss";
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer
} from "./CartItemStyled";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      {/* product image */}
      <CartItemImage src={imageUrl} alt="item" />
      {/* product details */}
      <ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
