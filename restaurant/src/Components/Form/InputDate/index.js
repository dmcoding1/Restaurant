import React, { useState } from 'react';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

function InputDate() {
  const [date, setDate] = useState();

  const getDataFromDb = (data) => {
    setDate();
    console.log(data);
  }

  return (
    <DatePicker date={date} onDateChange={getDataFromDb} locale={enGB}>
      {({ inputProps, focused }) => (
        <input
          className={'input' + (focused ? ' -focused' : '')}
          {...inputProps}
        />
      )}
    </DatePicker>
  )
}

export default InputDate;