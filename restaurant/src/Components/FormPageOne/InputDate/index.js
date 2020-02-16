import React, { useState } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";

function InputDate() {
  const [date, setDate] = useState();

  const getDataFromDb = data => {
    setDate();
    console.log(data);
  };

  return (
    <DatePicker date={date} onDateChange={getDataFromDb} locale={enGB}>
      {({ inputProps, focused }) => (
        <>
          <label htmlFor="date" className="reservation__label">
            Date
          </label>
          <input
            id="date"
            required
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
