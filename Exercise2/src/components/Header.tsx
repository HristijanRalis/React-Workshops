import React from "react";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className="Header">
      <div className="cont">
        <a href="/" className="logo-wrap">
          <img alt="Logo" />
        </a>
        <div className="button_container" id="toggle">
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>
      </div>
      <div className="overlay" id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Current Weather</a>
            </li>
            <li>
              <a href="/">Weather Forecast</a>
            </li>
            <li>
              <a href="/">Open Weather Map</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
