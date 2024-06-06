import { Typewriter } from "react-simple-typewriter";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./hero.css";
import { BackgroundEl } from "../design/Home/Home";
import heroA from "../../assets/home/heroA.svg";

const Hero = () => {
  return (
    <section className="relative backgroundNet height py-[5rem] lg:min-h-[85vh] lg:py-[10rem] grid grid-cols-1 gap-5 lg:grid-cols-2">
      <motion.article
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 50 },
          opacity: { duration: 1 },
          ease: "easeInOut",
          duration: 1.8,
        }}
        className="text-center lg:text-start"
      >
        <div>
          <p className="text-lg text-colorOffWhite select-none inline px-4 py-2 rounded-lg bg-gradient">
            Welcome to my Portfolio
          </p>
        </div>
        <h6 className="h6 font-normal mt-6">
          Hi, I'm <span className="font-semibold">Habib Shah</span> a
        </h6>
        <h1 className="h1 text-gradient">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Responsive Frontend Developer",
              "Backend Web Developer",
            ]}
            loop={Infinity}
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={2000}
            cursor
            cursorStyle="_"
          />
        </h1>
        <p className="body-1 mt-5 w-full md:w-[95%] lg:w-[87%] xl:w-[82%]">
          Innovative thinking is the cornerstone of my work. I constantly
          explore new ways to amplify the reach and effectiveness of my
          solutions, ensuring that the positive change I create can be scaled
          and replicated to drive widespread impact.
        </p>
        <Link
          to="https://github.com/HabibSha/developers-personal-portfolio"
          target="_blank"
          className="mt-5 btnPrimary"
        >
          <span className="text-[orange]">&#9733;</span> Star Me On GitHub
        </Link>
      </motion.article>
      <motion.article
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 50 },
          opacity: { duration: 1 },
          ease: "easeInOut",
          duration: 1.8,
        }}
        className="relative flex items-center justify-center"
      >
        <BackgroundEl />
        <img
          src={heroA}
          alt="HeroA"
          className="max-w-[90%] lg:w-[90%] lg:absolute lg:-top-[6rem] lg:left-[2rem] z-50"
        />
      </motion.article>
    </section>
  );
};

export default Hero;
