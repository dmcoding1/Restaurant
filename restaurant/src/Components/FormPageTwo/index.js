import React, { useContext } from "react";
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import InputPhone from "./InputPhone";
import Button from "../Button";
import ReservationContext from "../../Context/ReservationContext";

const FormPageTwo = () => {
  const {
    setIsLoading,
    setCurrentFormPage,
    postData,
    setNumberOfPeople,
    setDate,
    setHour,
    setEmail,
    setName,
    setPhone,
    setIsActive,
    minDate
  } = useContext(ReservationContext);

  const handleSubmit = e => {
    e.preventDefault();
    postData();  
    setIsActive(false); 
  };

  const handleCancel = e => {
    e.preventDefault();
    setIsLoading(true);
    setNumberOfPeople(2);
    setDate(minDate);
    setHour(null);
    setEmail("");
    setName("");
    setPhone();
    setCurrentFormPage(1);
    setIsLoading(false);
    setIsActive(false);
  };

  return (
    <>
      <header className="reservation__header">
        <h3 className="reservation__heading">Details</h3>
        <button
          className="btn btn--back"
          data-text="Back"
          onClick={() => setCurrentFormPage(1)}
        >
          Back
        </button>
      </header>

      <form className="reservation__form" onSubmit={handleSubmit}>
        <InputName />
        <InputEmail />
        <InputPhone />
        <div className="reservation__btn-container">
          <Button
            className="btn btn--confirm"
            type="submit"
            text="Book a table"
          />
          <Button
            className="btn btn--cancel"
            text="Cancel"
            onClick={handleCancel}
          />
        </div>
      </form>
    </>
  );
};

export default FormPageTwo;
