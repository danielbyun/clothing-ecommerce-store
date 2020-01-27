import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/actions/shopActions";

import CollectionsOverviewContainer from "../../Components/Collections-Overview/CollectionsOverviewContainer";
import CollectionsPageContainer from "../Collection/CollectionContainer.js";

const Shop = props => {
  const { match, fetchCollectionsStartAsync } = props;
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch from firestore
    // const collectionRef = firestore.collection("collections");

    // =============== promise pattern ===============
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   // this will be refactored inside reducer
    //   setLoading(false);
    // });
    // ==================================================

    // =============== observable pattern ===============
    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   // this will be refactored inside reducer
    //   setLoading(false);
    // });
    // ==================================================

    // =============== fetch pattern ====================
    // REST API base URL
    // https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents
    // database ID: ecommerce-store-db-7e46f
    // fetch(
    //   `https://firestore.googleapis.com/v1/projects/ecommerce-store-db-7e46f/databases/(default)/documents`
    // )
    //   .then(resp => resp.json())
    //   .then(collections => console.log(collections));
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      {/* should dynamically redirect using a reducer */}
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
      />
    </div>
  );
};

export default connect(null, {
  fetchCollectionsStartAsync
})(Shop);
