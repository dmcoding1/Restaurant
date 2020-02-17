import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Reservation from './Components/Reservation';
import ReservationContextProvider from './Contexts/ReservationContextProvider';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ReservationContextProvider>
        <Reservation />
      </ReservationContextProvider>   
    </>
  );
}

export default App;
