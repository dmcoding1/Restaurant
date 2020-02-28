import React, { useContext } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import ReservationContext from "../../../Context/ReservationContext";
import "react-nice-dates/build/style.css";

const InputDate = () => {
  const { date, setDate, hour, setTimestamp, getDataFromDb } = useContext(ReservationContext);

  const fetchData = date => {
    setDate();
    setTimestamp(date.getTime() + (hour.split(":")[0] * 60 * 60 * 1000));
    //getDataFromDb(date);
  };


  return (
    <DatePicker date={date} onDateChange={fetchData} locale={enGB} minimumDate={new Date()}>
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
