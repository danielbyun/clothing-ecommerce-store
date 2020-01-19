import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import CartIcon from "../Cart-Icon/CartIcon";

import { auth } from "../../Firebase/Firebase.utils";

import _ from "lodash";
import { connect } from "react-redux";
import CartDropdown from "../Cart-Dropdown/CartDropdown";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/selectors/useSelectors";
import { selectCartHidden } from "../../redux/selectors/cartSelectors";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

// the selectors will automatically assign correct state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
