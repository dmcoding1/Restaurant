import React, { useEffect } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Reservation from "./Components/Reservation";
import ReservationContextProvider from "./Context/ReservationContextProvider";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Team from "./Components/Team";
import Location from "./Components/Location";
import Footer from "./Components/Footer";
import hightlightSectionsOnScroll from "./helpers/sectionsObserver";
import lazyLoadImages from "./helpers/imagesObserver";
import animateNavbar from "./helpers/navbarObserver";

const App = () => {

  useEffect(() => {
    hightlightSectionsOnScroll();
  }, [])

  useEffect(() => {
    lazyLoadImages();
  }, [])

  useEffect(() => {
    animateNavbar();
  }, [])

  useEffect(() => {
    window.ondragstart = () => false;
  }, [])

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
}

export default App;
