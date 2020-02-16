import React, { useContext } from 'react';
import FormHeader from '../FormHeader'
import InputSelect from './InputSelect';
import InputDate from './InputDate';
import InputHour from './InputHour';
import Button from '../Button';
import ReservationContext from '../../Contexts/ReservationContext';


const FormPageOne = () => {
  const { setIsLoading, setCurrentFormPage } = useContext(ReservationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentFormPage(2);
    setIsLoading(false);
  }

  return (
    <>
      <FormHeader heading="Make a reservation" />
      <form className="reservation__form" onSubmit={handleSubmit}>
          <InputSelect />
          <InputDate />
          <InputHour />
          <Button className="reservation__btn" text="Get a table"/>
        </form>
    </>
  )
}

export default FormPageOne;
