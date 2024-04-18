import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import styles, { footerSocial } from "../../style";

const Footer: React.FC = () => {
  return (
    <section
      className={`w-full h-auto bg-black ${styles.flexCenter} backdrop-blur-sm relative py-12`}
    >
      <footer className={`${styles.resContainer} ${styles.paddingX}`}>
        <article
          className={`flex items-start sm:items-center sm:justify-between ${styles.borderBottom} flex-col sm:flex-row pb-[2rem]`}
        >
          <div className="text-2xl font-bold mb-6 sm:mb-0">Portfolio</div>
          <div className="flex items-center gap-2 text-xl">
            <div className={`${footerSocial.socialLinks} bg-slate-800`}>
              <FaGithub />
            </div>
            <div className={`${footerSocial.socialLinks} bg-blue-500`}>
              <FaLinkedinIn />
            </div>
            <div className={`${footerSocial.socialLinks} bg-[#fa2a69]`}>
              <FaInstagram />
            </div>
            <div className={`${footerSocial.socialLinks} bg-blue-600`}>
              <FaFacebookF />
            </div>
            <div className={`${footerSocial.socialLinks} bg-black`}>
              <FaXTwitter />
            </div>
          </div>
        </article>
        <article className={`${styles.flexCenter}`}>
          <p className=" absolute bottom-2 text-slate-300 text-[14px]">
            Copyright &copy; 2024 | All right reserve.
          </p>
        </article>
      </footer>
    </section>
  );
};

export default Footer;
