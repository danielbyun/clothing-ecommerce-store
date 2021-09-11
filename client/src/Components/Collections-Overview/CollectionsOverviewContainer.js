import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/selectors/shopSelectors";
import WithSpinner from "../WithSpinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
  // make sure the prop name is the same as the one that we're wrapping
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
