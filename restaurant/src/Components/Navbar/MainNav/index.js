import React from "react";
import "./styles.scss";

const MainNav = ({ onClick }) => {
  return (
    <div className="main-nav__links">
      <ul className="main-nav__list">
        <li className="main-nav__link" onClick={onClick}>
          <a href="#menu">Menu</a>
        </li>
        <li className="main-nav__link" onClick={onClick}>
          <a href="#about">About</a>
        </li>
        <li className="main-nav__link" onClick={onClick}>
          <a href="#team">Our Team</a>
        </li>
        <li className="main-nav__link" onClick={onClick}>
          <a href="#reservation">Reservation</a>
        </li>
        <li className="main-nav__link" onClick={onClick}>
          <a href="#location">Location</a>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
