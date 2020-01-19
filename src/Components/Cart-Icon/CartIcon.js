import React from "react";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";

import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cartActions";
import { selectCartItemsCount } from "../../redux/selectors/cartSelectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // add all of the values in quantity and bring it down to a final value
  // use memoized selector so it only compares the select part of the state so the components don't re-render for no reaseon
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
