import React, { useContext } from "react";
import FormHeader from "../shared/FormHeader";
import Button from "../shared/Button";
import ReservationContext from "../../Context/ReservationContext";

const FormPageThree = () => {
  const {
    name,
    hour,
    currentDate,
    numberOfPeople,
    setIsLoading,
    setCurrentFormPage,
    getDataFromDb,
  } = useContext(ReservationContext);

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getDataFromDb();
    setCurrentFormPage(1);
    setIsLoading(false);
  };

  return (
    <>
      <FormHeader heading={`Thank you ${name.trim()}!`} />
      <div className="reservation__text-container">
        <p className="reservation__text">{`You've just reserved the table for ${numberOfPeople} on ${
          weekDays[currentDate.getDay()]
        } ${currentDate.getDate()}/${
          currentDate.getMonth() + 1
        }/${currentDate.getFullYear()} at ${
          hour === 12 ? hour + " AM" : hour - 12 + " PM"
        }.`}</p>
        <p className="reservation__text">Do you want to book another table?</p>
        <Button className="btn" text="Reservation" onClick={handleClick} />
      </div>
    </>
  );
};

export default FormPageThree;
