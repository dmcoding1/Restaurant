import React, { useContext } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import ReservationContext from "../../../Context/ReservationContext";
import "react-nice-dates/build/style.css";
import "./styles.scss";

const InputDate = () => {
  const { currentDate, setDate, setIsActive, minDate  } = useContext(ReservationContext);

  const handleChange = date => {
    setIsActive(false);
    setDate(date);
  }

  return (
    <DatePicker date={currentDate} onDateChange={handleChange} locale={enGB} minimumDate={minDate}>
      {({ inputProps, focused }) => (
        <>
          <label htmlFor="date" className="reservation__label">
            Date
          </label>
          <input
            id="date"
            required
            autoComplete="off"
            className={
              "input" + (focused ? " -focused" : "") + " reservation__input"
            }
            onChange={handleChange}
            {...inputProps}
          />
        </>
      )}
    </DatePicker>
  );
}

export default InputDate;
