import React from "react";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/selectors/shopSelectors";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../Collection-Preview/Collection";
import "./CollectionsOverview.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollection
});

export default connect(mapStateToProps)(CollectionsOverview);
