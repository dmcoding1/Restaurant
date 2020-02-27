import React, { useContext } from "react";
import ReservationContext from "../../../Context/ReservationContext";

const InputSelect = () => {

  const { numberOfPeople, setNumberOfPeople } = useContext(ReservationContext);

  const handleChange = (e) => {
    setNumberOfPeople(e.target.value);
  }

  return (
    <>
    <label htmlFor="people" className="reservation__label">No. of people</label>
    <select id="people" className="reservation__select" onChange={handleChange} value={numberOfPeople}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    </>
  );
}

export default InputSelect;
