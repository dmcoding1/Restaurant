import React, { useRef } from "react";
import Image from "../shared/Image";
import useSectionObserver from "../../hooks/useSectionObserver";

import "./styles.scss";

const About = () => {
  const aboutSection = useRef();

  useSectionObserver(aboutSection);

  return (
    <section className="about" id="about" ref={aboutSection}>
      <div className="about__content">
        <div className="about__text-container">
          <header className="about__heading">Our Story</header>
          <p className="about__main-paragraph">
            <span className="color-1">Turnip</span> greens yarrow ricebean
            rutabaga endive cauliflower sea lettuce.
          </p>
          <p className="about__sub-paragraph">
            Cabbage asparagus winter purslane kale. Celery potato scallion
            desert raisin horseradish spinach carrot soko.
          </p>
          <p className="about__main-paragraph about__main-paragraph--color">
            <span className="color-2">Horseradish</span> azuki bean lettuce
            avocado asparagus okra.
          </p>
          <p className="about__sub-paragraph">
            Fennel gumbo black-eyed pea. Grape silver beet watercress potato
            tigernut corn groundnut.
          </p>
          <p className="about__main-paragraph">
            <span className="color-3">Beetroot</span> water spinach okra water
            chestnut ricebean.
          </p>
          <p className="about__sub-paragraph">
            Water spinach arugula pea tatsoi aubergine spring onion bush tomato
            kale radicchio turnip.
          </p>
        </div>
      </div>
      <Image className="about__image" src="/images/about.jpeg" type="div" />
    </section>
  );
};

export default About;
