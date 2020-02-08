import React from 'react';
import InputEmail from './InputEmail';
import InputSelect from './InputSelect';
import InputDate from './InputDate';
import InputHour from './InputHour';


function Form() {
  return (
    <form>
      <InputEmail></InputEmail>
      <InputSelect></InputSelect>
      <InputDate></InputDate>
      <InputHour></InputHour>
    </form>
  )
}

export default Form
