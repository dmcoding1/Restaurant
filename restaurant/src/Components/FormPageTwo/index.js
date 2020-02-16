import React, { useContext } from 'react';
import InputName from "./InputName";
import InputEmail from "./InputEmail";
import InputPhone from "./InputPhone";
import Button from "../Button";
import ReservationContext from '../../Contexts/ReservationContext';

const FormPageTwo = () => {

  const { setIsLoading, setCurrentFormPage } = useContext(ReservationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentFormPage(3);
    setIsLoading(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentFormPage(1);
    setIsLoading(false);
  }

  return (
    <>
      <header className="reservation__header">
        <h3 className="reservation__heading">Details</h3>
        <button
          className="reservation__btn reservation__btn--back"
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
            className="reservation__btn reservation__btn--confirm"
            type="submit"
            text="Book a table"
          />
          <Button
            className="reservation__btn reservation__btn--cancel"
            text="Cancel"
            onClick={handleCancel}
          />
        </div>
      </form>
    </>
  );
};

export default FormPageTwo;
