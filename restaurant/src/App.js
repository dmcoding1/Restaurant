import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Reservation from "./Components/Reservation";
import ReservationContextProvider from "./Context/ReservationContextProvider";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Team from "./Components/Team";
import Location from "./Components/Location";
import Footer from "./Components/Footer";
import "intersection-observer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Menu />
      <About />
      <Team />
      <ReservationContextProvider>
        <Reservation />
      </ReservationContextProvider>
      <Location />
      <Footer />
    </>
  );
};

export default App;
