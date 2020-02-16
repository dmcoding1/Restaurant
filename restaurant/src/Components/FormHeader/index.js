import React from "react";
import "./styles.scss";

const FormHeader = ({ heading }) => {
  return (
    <header className="reservation__header">
      <h3 className="reservation__heading">{heading}</h3>
    </header>
  );
};

export default FormHeader;
