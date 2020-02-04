import React from "react";

import "./Header.scss";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import CartIcon from "../Cart-Icon/CartIcon";

// import { auth } from "../../Firebase/Firebase.utils";

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
import { signOutStart } from "../../redux/actions/userActions";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => signOutStart()}>
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

// const mapDispatchToProps = dispatch => ({
//   signOutStart: () => dispatch(signOutStart())
// });

export default connect(mapStateToProps, { signOutStart })(Header);
