import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../Components/Collections-Overview/CollectionsOverview";
import Collection from "../Collection/Collection";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      {/* should dynamically redirect using a reducer */}
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
