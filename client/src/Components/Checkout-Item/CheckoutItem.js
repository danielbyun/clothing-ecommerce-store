import React from "react";

import "./CheckoutItem.scss";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  clearItemFromCart
} from "../../redux/actions/cartActions";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./CheckoutItemStyled";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="Item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

// const mapDispatchToProps = dispatch => ({
//   clearItem: item => dispatch(clearItemFromCart(item))
// });

export default connect(null, { addItem, removeItem, clearItemFromCart })(
  CheckoutItem
);
