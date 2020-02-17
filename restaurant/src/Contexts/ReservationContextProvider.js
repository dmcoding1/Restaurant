import React, { useState } from 'react';
import ReservationContext from './ReservationContext';

const ReservationContextProvider = (props) => {
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ReservationContext.Provider value={{
      currentFormPage,
      setCurrentFormPage,
      isLoading,
      setIsLoading
    }}>
      {props.children}
    </ReservationContext.Provider>
  )
}

export default ReservationContextProvider;
