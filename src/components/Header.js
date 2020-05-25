import React from "react";
import PropTypes from "prop-types";

const Header = (props) => (
  <header className="top">
    <h1>
      <strong>Dashboard</strong>
    </h1>
    <h3 className="tagline">
      <span>Welcome</span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
