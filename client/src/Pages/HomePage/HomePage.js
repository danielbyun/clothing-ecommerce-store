import React from "react";

import "./HomePage.scss";
import Directory from "../../Components/Directory/Directory";

import {HomePageContainer} from "./HomePageStyled";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
