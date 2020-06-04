import React, { useRef } from "react";
import Image from "../shared/Image";
import useSectionObserver from "../../hooks/useSectionObserver";
import useMap from "../../hooks/useMap";
import "./styles.scss";

const Location = () => {
  const locationSection = useRef();

  useSectionObserver(locationSection);

  useMap();

  return (
    <section className="location" id="location" ref={locationSection}>
      <div className="location__container">
        <div className="location__details">
          <div className="location__address">
            <div className="location__heading">Location</div>
            <div className="location__text">
              Fresh Italian
              <br />
              718 W Meadowbrook Dr
              <br />
              Midland, Michigan 48640
              <br />
              TEL: 989 638 5139
            </div>
          </div>
        </div>
        <Image
          className="location__image"
          src="/images/location.jpg"
          type="div"
        />
      </div>
      <div className="location__map" id="map"></div>
    </section>
  );
};

export default Location;
