import React, { useContext } from "react";
import ReservationContext from "../../../Context/ReservationContext";

const EmailInput = () => {
  const { email, setEmail } = useContext(ReservationContext);

  const handleChange = (e) => setEmail(e.target.value);

  return (
    <>
      <label htmlFor="email" className="reservation__label">
        Email
      </label>
      <input
        type="email"
        className="reservation__input"
        id="email"
        value={email}
        required
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        inputMode="email"
        onChange={handleChange}
      />
    </>
  );
};

export default EmailInput;
