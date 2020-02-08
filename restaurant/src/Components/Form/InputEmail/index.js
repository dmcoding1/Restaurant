import React from "react";
import './styles.scss';

function EmailInput() {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" placeholder="Email" className="form__input-email"></input>
    </>
  );
}

export default EmailInput;
