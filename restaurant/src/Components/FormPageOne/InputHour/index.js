import React, { useContext, useEffect } from "react";
import ReservationContext from "../../../Context/ReservationContext";

const InputHour = () => {
  

  const { currentDate, hour, setHour, takenHours, getDataFromDb, earliestHour } = useContext(ReservationContext);

  const takenHoursArr = Object.keys(takenHours);

  const handleChange = e => {
    setHour(+e.target.value);
  }

  const generateHourInputs = () => {
    const output = [];
    for (let i = 12; i < 21; i++) {
      output.push(
        <input
          key={i}
          type="radio"
          className="reservation__radio"
          id={`${i === 12 ? 12 : (i - 12)}`}
          value={i}
          name="hour"
          disabled={takenHoursArr.includes(`${i}:00`)}
          checked={hour ? i === +hour : i === earliestHour}
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
    getDataFromDb();   
  }, [currentDate]);

  return (
    <>
      <div className="reservation__label" id="reservation-hour">Hour</div>
      <div className="reservation__hours" role="region" aria-labelledby="reservation-hour">
        <legend className="reservation__legend">
          <div className="available">Available</div>
          <div className="taken">Taken</div>
        </legend>
        {generateHourInputs()}
      </div>
    </>
  );
};

export default InputHour;
