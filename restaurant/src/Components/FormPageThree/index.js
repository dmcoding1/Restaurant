import React, { useContext } from 'react';
import FormHeader from "../FormHeader";
import Button from "../Button";
import ReservationContext from '../../Contexts/ReservationContext';

const FormPageThree = () => {

  const { setIsLoading, setCurrentFormPage } = useContext(ReservationContext);

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentFormPage(1);
    setIsLoading(false);
  }

  return (
    <>
      <FormHeader heading="Thank you for the reservation!" />
      <div className="reservation__text-container">
        <p className="reservation__text">Check your email for details.</p>
        <p className="reservation__text">
          Do you want to book another table?
        </p>
        <Button className="reservation__btn" text="Reservation" onClick={handleClick}/>
      </div>
    </>
  );
};

export default FormPageThree;
