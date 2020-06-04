import React, { useEffect, useRef } from "react";

import Logo from "./Logo";
import MainNav from "./MainNav";

import animateNavbar from "../../helpers/navbarObserver";
import "./styles.scss";

const Navbar = () => {
  const hamburgerButton = useRef();
  const mainNav = useRef();

  const handleMenu = () => {
    animateNavbar(mainNav.current, mainNav.current.nextElementSibling);

    hamburgerButton.current.addEventListener("click", (e) => {
      hamburgerButton.current.classList.toggle("open");
      mainNav.current.classList.toggle("open");
    });

    if (window.innerWidth < 768) {
      mainNav.current.classList.remove(
        "main-nav--narrow",
        "main-nav--back-animation"
      );
    }
  };

  const hideMenu = () => {
    if (window.innerWidth < 768) {
      mainNav.current.classList.toggle("open");
      hamburgerButton.current.classList.toggle("open");
    }
  };

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", handleMenu);
    window.addEventListener("resize", handleMenu);

    return () => {
      window.removeEventListener("DOMContentLoaded", handleMenu);
      window.removeEventListener("resize", handleMenu);
    };
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
          <Logo onClick={hideMenu} />
          <MainNav onClick={hideMenu} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
