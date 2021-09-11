import React from "react";
import {withRouter} from "react-router-dom";
import "./MenuItem.scss";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./MenuItemStyled";

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
  return (
    <MenuItemContainer
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        style={{backgroundImage: `url(${imageUrl})`}}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>Shop Now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
