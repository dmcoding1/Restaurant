import React, { useEffect, useRef } from "react";

import Logo from "./Logo";
import MainNav from "./MainNav";

import "./styles.scss";
import animateNavbar from "../../helpers/navbarObserver";

const Navbar = () => {
  const hamburgerButton = useRef();
  const mainNav = useRef();

  const handleMenu = () => {
    animateNavbar();

    if (window.innerWidth < 768) {
      const hamburger = hamburgerButton.current;
      const nav = mainNav.current;

      nav.classList.remove("main-nav--narrow", "main-nav--back-animation");

      hamburger.addEventListener("click", (e) => {
        hamburger.classList.toggle("open");
        nav.classList.toggle("open");
      });
    }
  };

  useEffect(() => {
    handleMenu();

    window.addEventListener("resize", handleMenu);

    return () => window.removeEventListener("resize", handleMenu);
  }, []);

  return (
    <>
      <button className="hamburger-button" ref={hamburgerButton}>
        <span className="hamburger-button__line"></span>
        <span className="hamburger-button__line"></span>
        <span className="hamburger-button__line"></span>
      </button>
      <nav className="main-nav" ref={mainNav}>
        <div className="main-nav__container">
          <Logo />
          <MainNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
