import React from "react";
import "./styles.scss";

const Button = ({ className, text, type, onClick}) => {
  return (
    <button className={className} data-text={text} type={type ? type : ""} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
