import React, { useEffect, useRef, useState } from "react";

import Logo from "./Logo";
import MainNav from "./MainNav";

import animateNavbar from "../../helpers/navbarObserver";
import "./styles.scss";

const Navbar = () => {
  const hamburgerButton = useRef();
  const mainNav = useRef();

  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleMenu = () => {
    animateNavbar(mainNav.current, mainNav.current.nextElementSibling);

    if (window.innerWidth < 768) {
      mainNav.current.classList.remove(
        "main-nav--narrow",
        "main-nav--back-animation"
      );
    }
  };

  const hideMenu = () => {
    if (window.innerWidth < 768) {
      setSideMenuOpen(false);
    }
  };

  useEffect(() => {
    handleMenu();
    window.addEventListener("resize", handleMenu);

    return () => {
      window.removeEventListener("resize", handleMenu);
    };
  }, []);

  return (
    <>
      <button className="hamburger-button" ref={hamburgerButton} onClick={() => setSideMenuOpen(!sideMenuOpen)}>
        <span className={`hamburger-button__line ${sideMenuOpen && "open"}`}></span>
        <span className={`hamburger-button__line ${sideMenuOpen && "open"}`}></span>
        <span className={`hamburger-button__line ${sideMenuOpen && "open"}`}></span>
      </button>
      <nav className={`main-nav ${sideMenuOpen && "open"}`} ref={mainNav}>
        <div className="main-nav__container">
          <Logo onClick={hideMenu} />
          <MainNav onClick={hideMenu} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
