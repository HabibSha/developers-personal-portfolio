import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaGoogle,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import contact from "../../assets/contact/contactA.svg";
import { footerSocial } from "../../style";
// import profile from "../../assets/contact/profile.jpeg";

const ContactHero: React.FC = () => {
  return (
    <section>
      <article className="grid text-center gap-0 lg:text-start lg:grid-cols-2 lg:gap-5">
        <div className="order-2 lg:order-1">
          <img src={contact} alt="Profile" className="w-[100%]" />
        </div>
        <div className="pt-[10%] lg:pt-[28%] order-1 lg:order-2 text-center">
          <h2 className="h2 text-gradient mb-3 lg:mb-5">Contact Me</h2>
          <p className="body-1">
            Don't hesitate to contact me. I am available on almost every social
            media. You can message me, I will reply within 24 hours. I can help
            you with MERN, React, Javacript and Responsive Web Development.
          </p>
          <div className="flex items-center justify-center gap-3 text-xl py-3">
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
            <div className={`${footerSocial.socialLinks} bg-orange-700`}>
              <FaGoogle />
            </div>
            <div className={`${footerSocial.socialLinks} bg-[#fa2a69]`}>
              <FaInstagram />
            </div>
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
          <Link to="#" target="_blank">
            <button className="btnPrimary mt-4">See My Resume</button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ContactHero;
