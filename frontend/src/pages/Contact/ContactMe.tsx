import React from "react";

import styles from "../../style";
import ContactHero from "../../components/ContactHero/ContactHero";

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
    </section>
  );
};

export default ContactMe;
