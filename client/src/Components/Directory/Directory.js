import React from "react";
import {connect} from "react-redux";

import MenuItem from "../MenuItem/MenuItem";

import {selectDirectorySections} from "../../redux/selectors/directorySelectors";
import {createStructuredSelector} from "reselect";

import "./Directory.scss";
import {DirectoryMenuContainer} from "./DirectoryStyled";

const Directory = ({sections}) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({id, ...otherSectionProps}) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
