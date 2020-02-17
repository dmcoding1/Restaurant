import React from 'react';
import "./styles.scss";

const Header = () => {

  const handleMouse = (e) => {
    const headerWidth = e.target.parentNode.offsetWidth;
    const headerHeight = e.target.parentNode.offsetHeight;

    const transformX = e.clientX / headerWidth;
    const transformY = e.clientY / headerHeight;

    e.target.style.transform = `translate(${transformX * 3}%, ${transformY * 3}%)`;

  };


  return (
    <header className="header">
      <div className="header__overlay" onMouseMove={handleMouse}></div>
    </header>
  )
}

export default Header;
