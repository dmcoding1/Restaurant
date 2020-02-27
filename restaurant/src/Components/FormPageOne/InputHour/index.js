import React, { useContext, useEffect } from "react";
import ReservationContext from "../../../Context/ReservationContext";

const InputHour = () => {
  const mockTableData = {
    "12": true,
    "13": true,
    "15": true,
    "20": true
  };

  const { hour, setHour } = useContext(ReservationContext);

  const getEarliestAvailableHour = (takenHours) => {
    let min = 21;
    for (let i = 12; i < 21; i++) {
      if (takenHours && takenHours.includes(`${i}`)) continue;
      if (i < min) min = i;
    }

    return min;
  };

  const handleChange = e => {
    setHour(e.target.value);
    console.log(hour);
  }

  const generateHourInputs = (takenHours) => {
    const output = [];
    for (let i = 12; i < 21; i++) {
      output.push(
        <input
          key={i}
          type="radio"
          className="reservation__radio"
          id={`${i === 12 ? 12 : (i - 12)}`}
          value={`${i}:00`}
          name="hour"
          disabled={takenHours.includes(`${i}`)}
          defaultChecked={i === getEarliestAvailableHour(Object.keys(mockTableData))}
          onChange={handleChange}
        />
      );
      output.push(
        <label
          key={i + 10}
          htmlFor={`${i === 12 ? 12 : i - 12}`}
          className="reservation__radio-label"
        >
          {`${i === 12 ? 12 : i - 12}`}
        </label>
      );
    }

    return output;
  };

  useEffect(() => {    
    if (!hour) {
      const defaultHour = getEarliestAvailableHour(Object.keys(mockTableData));
      setHour(`${defaultHour}:00`);
    }      
  });

  return (
    <>
      <div className="reservation__label" id="reservation-hour">Hour</div>
      <div className="reservation__hours" role="region" aria-labelledby="reservation-hour">
        <legend className="reservation__legend">
          <div className="available">Available</div>
          <div className="taken">Taken</div>
        </legend>
        {generateHourInputs(Object.keys(mockTableData))}
      </div>
    </>
  );
};

export default InputHour;
