import React from "react";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">shoes</h1>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">outerwear</h1>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">womens</h1>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">mens</h1>
            <span className="subtitle">shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">sale</h1>
            <span className="subtitle">shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
