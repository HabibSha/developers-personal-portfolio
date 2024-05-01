import React from "react";

import styles from "../../style";
import ContactHero from "../../components/ContactHero/ContactHero";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import { contactInfo } from "../../components/Constants";

const ContactMe: React.FC = () => {
  return (
    <section className="border-b-[1px]">
      <article className="relative border-b-[1px] h-auto pt-[9vh]">
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
