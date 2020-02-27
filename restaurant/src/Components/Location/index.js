import React, { useEffect } from "react";
import L from "leaflet/dist/leaflet.js";
import "leaflet/dist/leaflet.css";
import "./styles.scss";
import key from "../../key.js";

const Location = () => {

  useEffect(() => {
    const myMap = L.map("map").setView([37.7749, -122.4194], 13);

    // L.tileLayer(
    //   `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${key}`,
    //   {
    //     attribution:
    //       'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: "mapbox/streets-v11",
    //     accessToken: key
    //   }
    // ).addTo(myMap);
  }, []);

  return (
    <section className="location" id="location">
      <div className="location__container">
        <div className="location__details">
          <div className="location__address">
            <div className="location__heading">Location</div>
            <div className="location__text">Fresh Italian<br />
            718  Mount Street<br />Midland,  Michigan 48640<br />
            TEL: 989-638-5139
            </div>
          </div>
        </div> 
        <div className="location__image" data-src="/images/location.jpg"></div>
      </div>
      <div className="location__map" id="map"></div>
    </section>
  )
}

export default Location;
