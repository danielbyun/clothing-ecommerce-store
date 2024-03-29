import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";

import {selectIsCollectionsLoaded} from "../../redux/selectors/shopSelectors";
import WithSpinner from "../../Components/WithSpinner/WithSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionPageContainer;
