import React from "react";

import styles from "../../style";
import ContactHero from "../../components/ContactHero/ContactHero";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import { contactInfo } from "../../components/Constants";
import { ContactBackgroundDots } from "../../components/design/Contact/Contact";

const ContactMe: React.FC = () => {
  return (
    <section>
      <div>
        <ContactBackgroundDots />
      </div>
      <article className="relative h-auto pt-[9vh]">
        {/* <div className="blur-leftCorner absolute"></div> */}
        <div className="blur-rightCorner absolute"></div>
        {/* <div className="blur-bottomCorner absolute"></div> */}
        <div className={`container mx-auto ${styles.paddingX}`}>
          <ContactHero />
        </div>
      </article>
      <article className="relative h-auto">
        <div className={`container mx-auto ${styles.paddingX}`}>
          <ContactInfo contactInfo={contactInfo} />
        </div>
      </article>
    </section>
  );
};

export default ContactMe;
