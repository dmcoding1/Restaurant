import React from "react";

const InputPhone = () => {
  return (
    <>
      <label htmlFor="phone" className="reservation__label">
        Phone
      </label>
      <input
        type="tel"
        className="reservation__input"
        id="phone"
        pattern="[0-9]{9}"
        required
      />
    </>
  );
};

export default InputPhone;
