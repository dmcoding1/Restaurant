import React, { useContext, useRef } from "react";
import FormPageOne from "../FormPageOne";
import FormPageTwo from "../FormPageTwo";
import FormPageThree from "../FormPageThree";
import Loader from "../Loader";
import ReservationContext from "../../Context/ReservationContext";
import useImageObserver from "../../hooks/useImageObserver";
import useSectionObserver from "../../hooks/useSectionObserver";

import "./styles.scss";

const Reservation = () => {
  const context = useContext(ReservationContext);

  const reservationSection = useRef();

  useImageObserver(reservationSection);
  useSectionObserver(reservationSection);

  const renderFormPage = (page) => {
    switch (page) {
      case 2:
        return <FormPageTwo />;
      case 3:
        return <FormPageThree />;
      default:
        return <FormPageOne />;
    }
  };

  return (
    <section
      className="reservation"
      id="reservation"
      data-src="/images/reservation.jpg"
      ref={reservationSection}
    >
      <div className="reservation__container">
        {renderFormPage(context.currentFormPage)}
        {context.isLoading && <Loader />}
      </div>  
    </section>
  );
};

export default Reservation;
