import React from "react";

function InputSelect() {
  return (
    <>
    <label htmlFor="select">No. of people</label>
      <select id="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </>
  );
}

export default InputSelect;
