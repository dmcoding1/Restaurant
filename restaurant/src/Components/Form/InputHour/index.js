import React from 'react'

function InputHour() {
  return (
    <div>
      <input type="radio" name="hours" value="12:00" id="12"/>
      <label htmlFor="12">12:00</label>
      <input type="radio" name="hours" value="13:00" id="13"/>
      <label htmlFor="13">13:00</label>
      <input type="radio" name="hours" value="14:00" id="14"/>
      <label htmlFor="14">14:00</label>
      <input type="radio" name="hours" value="15:00" id="15"/>
      <label htmlFor="15">15:00</label>
      <input type="radio" name="hours" value="16:00" id="16"/>
      <label htmlFor="16">16:00</label>
      <input type="radio" name="hours" value="17:00" id="17"/>
      <label htmlFor="17">17:00</label>
      <input type="radio" name="hours" value="18:00" id="18"/>
      <label htmlFor="18">18:00</label>
      <input type="radio" name="hours" value="19:00" id="19"/>
      <label htmlFor="19">19:00</label>
      <input type="radio" name="hours" value="20:00" id="20"/>
      <label htmlFor="20">20:00</label>

    </div>
  )
}

export default InputHour;
