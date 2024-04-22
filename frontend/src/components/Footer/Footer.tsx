import React from "react";

// import { Player } from "@lottiefiles/react-lottie-player";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./footer.css";
import styles, { footerSocial } from "../../style";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind-css.svg";
import tailwindP from "../../assets/tailwindP.svg";

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
          <img
            src={react}
            alt="React"
            className="w-[5rem] animate-spin-infinite"
          />
          <img src={tailwind} alt="" className="w-[5rem] animate-pulse" />
          <img src={tailwindP} alt="" className="w-16" />
          {/* <Player
            autoplay
            loop
            src={heroD}
            style={{ height: "300px", width: "300px" }}
          ></Player> */}
          <p className=" absolute bottom-2 text-slate-300 text-[14px]">
            Copyright &copy; 2024 | All right reserve.
          </p>
        </article>
      </footer>
    </section>
  );
};

export default Footer;
