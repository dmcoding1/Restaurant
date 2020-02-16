import React from "react";
import Logo from "./Logo";
import MainNav from "./MainNav"
import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <Logo />
        <MainNav />
      </div>
    </nav>
  );
};

export default Navbar;
