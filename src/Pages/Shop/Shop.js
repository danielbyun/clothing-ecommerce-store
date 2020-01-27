import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../Components/Collections-Overview/CollectionsOverview";
import Collection from "../Collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../Firebase/Firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/actions/shopActions";

import WithSpinner from "../../Components/WithSpinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(Collection);

const Shop = props => {
  const { match, updateCollections } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch from firestore
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);

      // this will be refactored inside reducer
      setLoading(false);
    });
  }, [updateCollections]);

  return (
    <div className="shop-page">
      {/* should dynamically redirect using a reducer */}
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionsPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default connect(null, { updateCollections })(Shop);
