import React from "react";

// import { Player } from "@lottiefiles/react-lottie-player";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./footer.css";
import styles, { footerSocial } from "../../style";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <section className="w-full relative h-auto bg-bgPrimary">
      <div className={`backgroundGlossy ${styles.flexCenter} relative py-12`}>
        <footer className={`${styles.resContainer} ${styles.paddingX}`}>
          <article
            className={`flex items-start sm:items-center sm:justify-between ${styles.borderBottom} flex-col sm:flex-row pb-[2rem]`}
          >
            <Link to="/" className="mb-6 sm:mb-0">
              <p className="text-xl md:text-2xl xl:text-3xl text-gradient font-Smooch">
                &#8249; HabibShahedAlahi / &#8250;
              </p>
            </Link>
            <div className="flex items-center gap-3 text-lg lg:text-xl">
              <Link
                to="https://github.com/HabibSha"
                target="_blank"
                className={`${footerSocial.socialLinks} bg-slate-900`}
              >
                <FaGithub />
              </Link>
              <Link
                to="https://www.linkedin.com/in/habib-shah/"
                target="_blank"
                className={`${footerSocial.socialLinks} bg-blue-500`}
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="mailto:habibshahalahi7424@gmail.com"
                target="_blank"
                className={`${footerSocial.socialLinks} bg-orange-700`}
              >
                <FaGoogle />
              </Link>
              <Link
                to="https://www.instagram.com/ftllxhabibshah/"
                target="_blank"
                className={`${footerSocial.socialLinks} bg-[#fa2a69]`}
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=100028631380085"
                target="_blank"
                className={`${footerSocial.socialLinks} bg-blue-600`}
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://twitter.com/HabibShah2524"
                target="_blank"
                className={`${footerSocial.socialLinks} bg-black`}
              >
                <FaXTwitter />
              </Link>
            </div>
          </article>
          <article className={`${styles.flexCenter}`}>
            <p className="absolute bottom-2">
              Made with <span className="text-[#ff0000]">&#10084;</span> by
              Habib Shah
            </p>
          </article>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
