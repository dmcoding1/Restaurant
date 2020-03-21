import React, { useContext } from "react";
import ReservationContext from "../../../Context/ReservationContext";

const InputPhone = () => {

  const { phone, setPhone } = useContext(ReservationContext);

  const handleChange = e => setPhone(e.target.value);

  return (
    <>
      <label htmlFor="phone" className="reservation__label">
        Phone
      </label>
      <input
        type="tel"
        className="reservation__input"
        id="phone"
        value={phone}
        required
        pattern="([+]?\d{1,2}[.\-\s]?)?(\d{3}[.\-\s]?){2}\d{3,}" 
        inputMode="tel"
        onChange={handleChange}
      />
    </>
  );
};

export default InputPhone;
