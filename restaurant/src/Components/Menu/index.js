import React, { useState, useEffect, useRef } from "react";
import MenuCard from "./MenuCard";
import { dinners, desserts, drinks } from "../../data/menu.js";
import "./styles.scss";

const Menu = () => {
  const [menuCard, setMenuCard] = useState("dinners");
  const [backgroundColor, setbackgroundColor] = useState("#AFF0AE");

  const generateCard = (name) => {
    switch(name) {
      case "desserts":
        return <MenuCard cardItems={desserts} price={7} />;
      case "drinks":
        return <MenuCard cardItems={drinks} price={5} />;
      default:
        return <MenuCard cardItems={dinners} price={10} />;
    }
  }

  const handleChangeToDinners = () => {
    setMenuCard("dinners");
    setbackgroundColor("#AFF0AE");
  }

  const handleChangeToDesserts = () => {
    setMenuCard("desserts");
    setbackgroundColor("#FFFFFF");
  }

  const handleChangeToDrinks = () => {
    setMenuCard("drinks");
    setbackgroundColor("#DEBCBC");
  }

  const imageContainer = useRef();

  useEffect(() => {
    imageContainer.current.style.backgroundImage = `url("/images/menu.jpg")`;
  }, []);

  return (
    <section className="menu" id="menu" ref={imageContainer}>
      <div className="menu__container">
        <div className="menu__image">
          <div className={`menu__dinner-image ${menuCard ===
                "dinners" ? "current" : ""}`}></div>
          <div className={`menu__dessert-image ${menuCard ===
                "desserts" ? "current" : ""}`}></div>
          <div className={`menu__drink-image ${menuCard ===
                "drinks" ? "current" : ""}`}></div>
        </div>
        <div className="menu__content" style={{backgroundColor: backgroundColor}}>
          <div className="menu__tabs">
            <button
              className={`menu__btn menu__btn--dinners ${menuCard ===
                "dinners" && "selected"}`}
              data-text="Dinners"
              onClick={handleChangeToDinners}
            >
              <span className="menu__btn-text">Dinners</span>
            </button>
            <button
              className={`menu__btn menu__btn--desserts ${menuCard ===
                "desserts" && "selected"}`}
              data-text="Desserts"
              onClick={handleChangeToDesserts}
            >
              <span className="menu__btn-text">Desserts</span>
            </button>
            <button
              className={`menu__btn menu__btn--drinks ${menuCard === "drinks" &&
                "selected"}`}
              data-text="Drinks"
              onClick={handleChangeToDrinks}
            >
              <span className="menu__btn-text">Drinks</span>
            </button>
          </div>
          <div className="menu__card">
            <ul className="menu__list">
              {generateCard(menuCard)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
