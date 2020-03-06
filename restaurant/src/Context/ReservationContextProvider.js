import React, { useState } from 'react';
import ReservationContext from './ReservationContext';

const ReservationContextProvider = (props) => {
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [currentDate, setDate] = useState(new Date());
  const [hour, setHour] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const reservationData = {
    email,
    capacity: numberOfPeople,
    timestamp: currentDate.setHours(0, 0, 0, 0) + (hour ? hour * 60 * 60 * 1000 : 0)
  }

  const postData = () => {
    fetch("//localhost:3100/reservation", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationData)
    })
  }

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
      currentDate,
      setDate,
      hour,
      setHour,
      setName,
      setEmail,
      setPhone,
      postData
    }}>
      {props.children}
    </ReservationContext.Provider>
  )
}

export default ReservationContextProvider;
