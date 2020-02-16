import React from 'react'

function InputHour() {
  return (
    <>
      <label className="reservation__label">Hour</label>
      <div className="reservation__hours">
        <legend className="reservation__legend">
          <div className="available">Available</div>
          <div className="taken">Taken</div>
        </legend>
        <input
          type="radio"
          className="reservation__radio"
          id="12"
          name="hour"
        />
        <label htmlFor="12" className="reservation__radio-label">
          12
        </label>
        <input type="radio" className="reservation__radio" id="1" name="hour" />
        <label htmlFor="1" className="reservation__radio-label">
          1
        </label>
        <input type="radio" className="reservation__radio" id="2" name="hour" />
        <label htmlFor="2" className="reservation__radio-label">
          2
        </label>
        <input type="radio" className="reservation__radio" id="3" name="hour" />
        <label htmlFor="3" className="reservation__radio-label">
          3
        </label>
        <input type="radio" className="reservation__radio" id="4" name="hour" />
        <label htmlFor="4" className="reservation__radio-label">
          4
        </label>
        <input type="radio" className="reservation__radio" id="5" name="hour" />
        <label htmlFor="5" className="reservation__radio-label">
          5
        </label>
        <input type="radio" className="reservation__radio" id="6" name="hour" />
        <label htmlFor="6" className="reservation__radio-label">
          6
        </label>
        <input type="radio" className="reservation__radio" id="7" name="hour" />
        <label htmlFor="7" className="reservation__radio-label">
          7
        </label>
        <input type="radio" className="reservation__radio" id="8" name="hour" />
        <label htmlFor="8" className="reservation__radio-label">
          8
        </label>
      </div>
    </>
  )
}

export default InputHour;
