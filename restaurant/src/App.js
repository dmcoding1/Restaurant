import React from 'react';
import Navbar from './Components/Navbar';
import Reservation from './Components/Reservation';
import ReservationContextProvider from './Contexts/ReservationContextProvider';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <ReservationContextProvider>
        <Reservation />
      </ReservationContextProvider>   
    </>
  );
}

export default App;
