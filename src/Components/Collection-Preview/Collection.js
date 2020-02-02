import React, { useEffect } from "react";
import "./Collection.scss";

import CollectionItem from "../Collection-Item/CollectionItem";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./CollectionStyled";

const CollectionPreview = ({ title, items }) => {
  useEffect(() => {
    // componentWillUnmount (clean up function)
    return () => {};
  });
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {/* performance concern whenever this component has to re-render */}
        {items
          // only show 4 items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
