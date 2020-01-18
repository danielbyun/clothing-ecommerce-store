import React from "react";
import CustomButton from "../Custom-Button/Custom-Button";

import "./CartDropdown.scss";
import CartItem from "../Cart-Item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/selectors/cartSelectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);