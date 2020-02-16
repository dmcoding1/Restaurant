import React from "react";

const InputName = () => {
  return (
    <>
      <label htmlFor="name" className="reservation__label">
        Name
      </label>
      <input type="text" className="reservation__input" id="name" required />
    </>
  );
};

export default InputName;
