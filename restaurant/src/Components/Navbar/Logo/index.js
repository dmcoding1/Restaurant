import React from "react";
import "./styles.scss";

const Logo = ({ onClick }) => {
  return (
    <a
      aria-label="Home"
      className="main-nav__logo"
      href="#home"
      onClick={onClick}
      title="Home"
    >
      <span>Fresh</span>
      <span>Ita</span>
      <span>li</span>
      <span>an</span>
    </a>
  );
};

export default Logo;
