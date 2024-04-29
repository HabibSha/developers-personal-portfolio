import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi
            voluptas tenetur, nihil amet molestias reprehenderit obcaecati
            accusantium et dignissimos.
          </p>
          <div className="flex items-center justify-center gap-3 text-xl py-3">
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
          <Link to="#" target="_blank">
            <button className="btnPrimary mt-4">See Resume</button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ContactHero;
