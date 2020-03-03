import React, { useContext } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import ReservationContext from "../../../Context/ReservationContext";
import "react-nice-dates/build/style.css";
import "./styles.scss";

const InputDate = () => {
  const { currentDate, setDate } = useContext(ReservationContext);

  return (
    <DatePicker date={currentDate} onDateChange={setDate} locale={enGB} minimumDate={new Date()}>
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
            {...inputProps}
          />
        </>
      )}
    </DatePicker>
  );
}

export default InputDate;
