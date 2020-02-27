import React, { useEffect, useRef } from 'react';
import "./styles.scss";

const Header = () => {

  const handleMouseMove = (e) => {
    const headerWidth = e.target.parentNode.offsetWidth;
    const headerHeight = e.target.parentNode.offsetHeight;

    const transformX = e.clientX / headerWidth;
    const transformY = e.clientY / headerHeight;

    e.target.style.transform = `translate(${transformX * 3}%, ${transformY * 3}%)`;
  };

  const imageContainer = useRef();

  useEffect(() => {
    imageContainer.current.style.backgroundImage = `url("/images/header.jpg")`
  }, [])

  return (
    <header className="header" id="home">
      <div ref={imageContainer} className="header__image-overlay" onMouseMove={handleMouseMove}></div>
      <div className="header__content">
        <h1 className="header__title">fresh italian</h1>
        <p className="header__subtitle">Celery quandong swiss chard chicory earthnut pea potato.</p>
        <a href="#reservation">
          <button className="btn header__btn" aria-hidden="true" focusable="false" data-text="Reservation">
            Reservation  
          </button> 
          <span className="visually-hidden">Reservation</span>
        </a>  
      </div>          
    </header>
  )
}

export default Header;
