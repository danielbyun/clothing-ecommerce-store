import React from "react";
import {connect} from "react-redux";
import "./CartItem.scss";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from "./CartItemStyled";

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/actions/cartActions";

const CartItem = (props) => {
  const {item} = props;
  const {addItem, removeItem, clearItemFromCart} = props;
  const {imageUrl, price, name, quantity} = item;

  return (
    <CartItemContainer>
      {/* product image */}
      <CartItemImage src={imageUrl} alt='item' />
      {/* product details */}
      <ItemDetailsContainer>
        <span className='name'>{name}</span>
        <a href='#' onClick={() => clearItemFromCart(item)}>
          <small>Remove</small>
        </a>
        <span className='price'>
          <span onClick={() => removeItem(item)} style={{cursor: "pointer"}}>
            &#60;
          </span>{" "}
          {quantity}{" "}
          <span onClick={() => addItem(item)} style={{cursor: "pointer"}}>
            &#62;
          </span>{" "}
          x ${price * quantity}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default connect(null, {addItem, removeItem, clearItemFromCart})(
  React.memo(CartItem)
);
