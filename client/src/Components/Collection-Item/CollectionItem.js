import React from "react";
import {connect} from "react-redux";

import "./CollectionItem.scss";

import {addItem} from "../../redux/actions/cartActions";
import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  AddButton,
  NameContainer,
  PriceContainer,
} from "./CollectionItemStyled";

const CollectionItem = ({addItem, item}) => {
  const {name, price, imageUrl} = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default connect(null, {addItem})(CollectionItem);
