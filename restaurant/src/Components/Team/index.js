import React, { useRef } from "react";
import Image from "../shared/Image";
import useSectionObserver from "../../hooks/useSectionObserver";
import "./styles.scss";

const Team = () => {
  const teamSection = useRef();

  useSectionObserver(teamSection);

  return (
    <section className="team" id="team" ref={teamSection}>
      <div className="team__container">
        <h2 className="team__heading">Our team</h2>
        <div className="team__content">
          <div className="team__member">
            <p className="team__name">Hugh Millie-Yate</p>
            <p className="team__description">
              Spicy jalapeno tri-tip buffalo pastrami boudin spare ribs
              burgdoggen filet mignon ham hock tenderloin andouille venison
              ribeye shoulder.
            </p>
          </div>
          <Image className="team__image" src="/images/cook1.jpg" alt="Cook" />
          <div className="team__member">
            <p className="team__name">Barry Tone</p>
            <p className="team__description">
              Tenderloin ribeye filet mignon strip steak, cupim boudin corned
              beef meatball kevin brisket doner picanha cow. Ball tip brisket
              pork salami ground round ribeye.
            </p>
          </div>
          <Image className="team__image" src="/images/cook2.jpg" alt="Cook" />
          <div className="team__member">
            <p className="team__name">Piff Jenkins</p>
            <p className="team__description">
              Sausage prosciutto kielbasa tongue shankle pork drumstick. Tri-tip
              shoulder meatloaf jerky alcatra pork loin chicken andouille
              landjaeger meatball tail kevin short ribs.
            </p>
          </div>
          <Image className="team__image" src="/images/cook3.jpg" alt="Cook" />
          <div className="team__member">
            <p className="team__name">Girth Wiedenbauer</p>
            <p className="team__description">
              Short ribs salami venison, doner spare ribs leberkas kielbasa
              buffalo shoulder burgdoggen. Corned beef venison t-bone pig ball
              tip shoulder pork.
            </p>
          </div>
          <Image className="team__image" src="/images/cook4.jpg" alt="Cook" />
        </div>
      </div>
    </section>
  );
};

export default Team;
