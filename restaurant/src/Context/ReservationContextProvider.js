import React, { useState } from 'react';
import ReservationContext from './ReservationContext';

const ReservationContextProvider = (props) => {
  const MILISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;
  const minDate = new Date(new Date() * 1 + MILISECONDS_IN_A_DAY);
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [currentDate, setDate] = useState(minDate);
  const [hour, setHour] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [takenHours, setTakenHours] = useState({});
  const [earliestHour, setEarliestHour] = useState();
  const [isActive, setIsActive] = useState(false);

  const reservationData = {
    email,
    capacity: numberOfPeople,
    timestamp: currentDate.setHours(0, 0, 0, 0) + (hour ? hour * 60 * 60 * 1000 : 0)
  }

  const postData = async () => {
    setIsLoading(true);
    await fetch("//localhost:3100/reservation", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationData)
    })
      setCurrentFormPage(3);
      setIsLoading(false);
  }

  const getDataFromDb = () => {
    if (isActive) return;
    setIsLoading(true);    
    fetch(`//localhost:3100/tables/available?reservationDate=${currentDate.getTime()}`)
      .then(res => res.json())
      .then(json => {
        let newHour = getEarliestAvailableHour(Object.keys(json));
        setEarliestHour(getEarliestAvailableHour(Object.keys(json)));
        setTakenHours(json);
        setIsLoading(false);
        setHour(newHour);       
      });
  };

  const getEarliestAvailableHour = (hoursArray) => {
    let min = 21;
    for (let i = 12; i < 21; i++) {
      if (hoursArray && hoursArray.includes(`${i}:00`)) continue;
      if (i < min) min = i;
    }

    return min;
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
      name,
      setName,
      setEmail,
      setPhone,
      postData, 
      takenHours, 
      earliestHour,
      setIsActive,
      minDate
    }}>
      {props.children}
    </ReservationContext.Provider>
  )
}

export default ReservationContextProvider;
