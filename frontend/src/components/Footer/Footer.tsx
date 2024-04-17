import React from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type FooterProps = {
  flexItems: string;
};

const Footer: React.FC<FooterProps> = ({ flexItems }) => {
  return (
    <section className="w-full h-auto bg-black flex items-center py-12">
      <footer
        className={`container px-4 mx-auto md:container lg:container xl:container xl:px-8`}
      >
        <article
          className={`sm:${flexItems} flex-col sm:flex-row pb-[2rem] border-b-[1px] border-slate-600`}
        >
          <div className="text-2xl font-bold mb-6 sm:mb-0">Portfolio</div>
          <div className="flex items-center gap-2 text-xl">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 cursor-pointer">
              <FaGithub />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#fa2a69] cursor-pointer">
              <FaInstagram />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black cursor-pointer">
              <FaXTwitter />
            </div>
          </div>
        </article>
        <article></article>
      </footer>
    </section>
  );
};

export default Footer;
