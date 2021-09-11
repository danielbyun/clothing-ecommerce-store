import React from "react";

import {connect} from "react-redux";

import {selectCollectionsForPreview} from "../../redux/selectors/shopSelectors";
import {createStructuredSelector} from "reselect";

import CollectionPreview from "../Collection-Preview/Collection";
import "./CollectionsOverview.scss";
import {CollectionsOverviewContainer} from "./CollectionsOverviewStyled";

const CollectionsOverview = ({collections}) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
