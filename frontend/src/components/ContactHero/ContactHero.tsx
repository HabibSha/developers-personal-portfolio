import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaGoogle,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import contact from "../../assets/contact/contact.png";
import { footerSocial } from "../../style";
// import profile from "../../assets/contact/profile.jpeg";

const ContactHero: React.FC = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.6,
        y: { type: "spring", stiffness: 50 },
        opacity: { duration: 1.8 },
        ease: "easeInOut",
        duration: 2.5,
      }}
      className="py-[2rem] lg:py-4"
    >
      <article className="grid text-center gap-0 lg:text-start lg:grid-cols-2 lg:gap-5">
        <div className="flex items-center justify-center xl:items-start xl:justify-start">
          <img
            src={contact}
            alt="Profile"
            className="w-[70%] border-[2px] border-colorIndigo rounded-full z-40"
          />
        </div>
        <div className="pt-[10%] xl:pt-[18%] text-center">
          <h2 className="h2 text-gradient mb-3 lg:mb-5">Contact Me</h2>
          <p className="body-1">
            Don't hesitate to contact me. I am available on almost every social
            media. You can message me, I will reply within 24 hours. I can help
            you with MERN, React, Javacript and Responsive Web Development.
          </p>
          <div className="flex items-center justify-center gap-3 text-xl my-5">
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
          <Link
            to="https://drive.google.com/file/d/1o7fKlAVP-5hu28HUC4i234utZr6S5v8Q/view"
            target="_blank"
          >
            <button className="btnPrimary mt-4">See My Resume</button>
          </Link>
        </div>
      </article>
    </motion.section>
  );
};

export default ContactHero;
