import React, { useContext } from "react";
import "./styles.scss";
import FormPageOne from "../FormPageOne";
import FormPageTwo from "../FormPageTwo";
import FormPageThree from "../FormPageThree";
import Loader from "../Loader";
import ReservationContext from "../../Contexts/ReservationContext";

const Reservation = () => {
  const context = useContext(ReservationContext);

  const renderFormPage = page => {
    switch(page) {      
      case 2: 
        return <FormPageTwo />;
      case 3: 
        return <FormPageThree />;
      default: 
        return <FormPageOne />;
    }
  }

  return (
    <section className="reservation">

      <div className="reservation__container">
        {renderFormPage(context.currentFormPage)}
      </div>

      {context.isLoading && <Loader /> }
      
    </section>
  );
};

export default Reservation;
