import React, { useEffect } from "react";
import Logo from "./Logo";
import MainNav from "./MainNav"
import "./styles.scss";
import animateNavbar from "../../helpers/navbarObserver";

const Navbar = () => {

  useEffect(() => {
    if (window.innerHeight > 767) {
      animateNavbar(); 
    } else {
      const hamburger = document.querySelector(".hamburger-button");
      const nav = document.querySelector(".main-nav");

      hamburger.addEventListener("click", (e) => {
        hamburger.classList.toggle("open");
        nav.classList.toggle("open");
      })
    }

  });

  return (
    <>
    <button className="hamburger-button">
      <span className="hamburger-button__line"></span>
      <span className="hamburger-button__line"></span>
      <span className="hamburger-button__line"></span>
    </button>
    <nav className="main-nav">
      <div className="main-nav__container">
        <Logo />
        <MainNav />
      </div>
    </nav>
    </>
  );
};

export default Navbar;
