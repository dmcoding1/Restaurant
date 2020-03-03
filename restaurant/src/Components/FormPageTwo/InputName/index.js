import React, { useContext } from "react";
import ReservationContext from "../../../Context/ReservationContext";

const InputName = () => {

  const { name, setName } = useContext(ReservationContext);

  const handleChange = e => setName(e.target.value);

  return (
    <>
      <label htmlFor="name" className="reservation__label">
        Name
      </label>
      <input type="text" className="reservation__input" id="name" value={name} required onChange={handleChange} />
    </>
  );
};

export default InputName;
