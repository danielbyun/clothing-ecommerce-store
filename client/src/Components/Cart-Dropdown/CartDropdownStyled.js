import styled from "styled-components";
import CustomButton from "../Custom-Button/Custom-Button";

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
};
