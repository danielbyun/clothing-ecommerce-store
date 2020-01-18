import React from "react";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";

import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cartActions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, { toggleCartHidden })(CartIcon);
