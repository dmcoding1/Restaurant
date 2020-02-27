import React, { useState } from 'react';
import ReservationContext from './ReservationContext';

const ReservationContextProvider = (props) => {
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const getDataFromDb = date => {
    fetch(`//localhost:3100/tables/available?reservationDate=${date.getTime()}`)
      .then(res => res.json())
      .then(json => console.log(json));
  };

  return (
    <ReservationContext.Provider value={{
      currentFormPage,
      setCurrentFormPage,
      isLoading,
      setIsLoading,
      getDataFromDb,
      numberOfPeople,
      setNumberOfPeople,
      date,
      setDate,
      hour,
      setHour,
      setName,
      setEmail,
      setPhone
    }}>
      {props.children}
    </ReservationContext.Provider>
  )
}

export default ReservationContextProvider;
