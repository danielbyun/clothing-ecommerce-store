import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

// header-container
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// logo-container
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

// options-container
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// options link
// div with option for signout but similar to link
// two different components but with same styles
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// export const OptionDiv = styled.div`
//   ${OptiosnContainerStyles}
// `;
