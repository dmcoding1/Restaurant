import React from "react";
import "./styles.scss";

const MainNav = () => {
  return (
    <div className="main-nav__links">
      <ul className="main-nav__list">
        <li className="main-nav__link">
          <a href="#">Menu</a>
        </li>
        <li className="main-nav__link">
          <a href="#">About</a>
        </li>
        <li className="main-nav__link">
          <a href="#">Our Team</a>
        </li>
        <li className="main-nav__link">
          <a href="#reservation">Reservation</a>
        </li>
        <li className="main-nav__link">
          <a href="#">Location</a>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
