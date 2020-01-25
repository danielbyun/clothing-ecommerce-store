import React from "react";

import "./Header.scss";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import CartIcon from "../Cart-Icon/CartIcon";

import { auth } from "../../Firebase/Firebase.utils";

import { connect } from "react-redux";
import CartDropdown from "../Cart-Dropdown/CartDropdown";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/selectors/userSelectors";
import { selectCartHidden } from "../../redux/selectors/cartSelectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer
} from "./HeaderStyled";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

// the selectors will automatically assign correct state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
