import styled from "styled-components";
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

  @media screen (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

// logo-container
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    padding: 0;
  }
`;

// options-container
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
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
