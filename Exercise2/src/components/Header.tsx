import React, { Component } from "react";
import logo from "../images/logo.png";
type State = {
  isMenuOpen: boolean;
};

class Header extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleToggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  render(): React.ReactNode {
    const isMenuOpen = this.state.isMenuOpen;
    return (
      <div className="Header">
        <div className="cont">
          <a href="/" className="logo-wrap">
            <img src={logo} alt="Logo" />
          </a>
          <div
            className={`button_container ${isMenuOpen ? "active" : ""}`}
            id="toggle"
            onClick={this.handleToggle}
          >
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
        </div>
        <div
          className={`overlay ${this.state.isMenuOpen ? "open" : ""}`}
          id="overlay"
        >
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
  }
}

export default Header;
