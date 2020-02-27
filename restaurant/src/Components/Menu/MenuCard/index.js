import React from "react";

const Card = ({ cardItems, price }) => {
  const generateCardContent = (cardItems, price) => {
    const menuList = cardItems.map(
      cardItem =>
        <li className="menu__item" key={cardItem}>{cardItem}<span className="dish"></span><span className="price">${price}</span></li>
    );

    return menuList;
  };

  return (
    <>
      {generateCardContent(cardItems, price)}
    </>
  );
};

export default Card;
