import React from "react";
import "./styles.scss";

const MainNav = () => {

  return (
    <div className="main-nav__links">
      <ul className="main-nav__list">
        <li className="main-nav__link">
          <a href="#menu">Menu</a>
        </li>
        <li className="main-nav__link">
          <a href="#about">About</a>
        </li>
        <li className="main-nav__link">
          <a href="#team">Our Team</a>
        </li>
        <li className="main-nav__link">
          <a href="#reservation">Reservation</a>
        </li>
        <li className="main-nav__link">
          <a href="#location">Location</a>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
