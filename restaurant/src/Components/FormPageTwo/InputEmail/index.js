import React from "react";

function EmailInput() {
  return (
    <>
    <label htmlFor="email" className="reservation__label">
          Email
        </label>
        <input
          type="email"
          className="reservation__input"
          id="email"
          required
        />
    </>
  );
}

export default EmailInput;
