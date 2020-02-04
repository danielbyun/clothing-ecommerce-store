import React from "react";

import "./Homepage.scss";
import Directory from "../../Components/Directory/Directory";

import { HomePageContainer } from "./HomepageStyled";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
