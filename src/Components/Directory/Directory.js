import React from "react";
import { connect } from "react-redux";

import MenuItem from "../MenuItem/MenuItem";

import { selectDirectorySections } from "../../redux/selectors/directorySelectors";
import { createStructuredSelector } from "reselect";

import "./Directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
