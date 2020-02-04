import React from "react";

import { ReactComponent as ShoppingIcon } from "../../Assets/shoppingBag.svg";

import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cartActions";
import { selectCartItemsCount } from "../../redux/selectors/cartSelectors";
import { createStructuredSelector } from "reselect";
import { CartContainer, ItemCountContainer } from "./CartIconStyled";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden} >
      <ShoppingIcon className="cart-icon"/>
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  // add all of the values in quantity and bring it down to a final value
  // use memoized selector so it only compares the select part of the state so the components don't re-render for no reaseon
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
