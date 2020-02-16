import React from "react";

import { selectCollection } from "../../redux/selectors/shopSelectors";

import { connect } from "react-redux";

import "./Collection.scss";
import CollectionItem from "../../Components/Collection-Item/CollectionItem";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from "./CollectionStyled";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
