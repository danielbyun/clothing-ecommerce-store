import React from "react";

import "./CartDropdown.scss";
import CartItem from "../Cart-Item/CartItem";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/selectors/cartSelectors";
import {toggleCartHidden} from "../../redux/actions/cartActions";

import {withRouter} from "react-router-dom";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from "./CartDropdownStyled";

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, {toggleCartHidden})(CartDropdown)
);
