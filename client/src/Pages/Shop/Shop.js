import React, {useEffect, lazy, Suspense} from "react";
import {Route} from "react-router-dom";

import {connect} from "react-redux";
import {fetchCollectionsStart} from "../../redux/actions/shopActions";

import Spinner from "../../Components/Spinner/Spinner";
import {ShopPageContainer} from "./ShopStyled.js";

const CollectionsOverviewContainer = lazy(() =>
  import("../../Components/Collections-Overview/CollectionsOverviewContainer")
);
const CollectionsPageContainer = lazy(() =>
  import("../Collection/CollectionContainer.js")
);

const Shop = (props) => {
  const {match, fetchCollectionsStart} = props;
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
    // collectionRef.onSnapshot(asnapshot => {
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
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      {/* should dynamically redirect using a reducer */}
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default connect(null, {
  fetchCollectionsStart,
})(Shop);
