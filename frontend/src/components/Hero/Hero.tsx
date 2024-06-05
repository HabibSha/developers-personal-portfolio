import { Typewriter } from "react-simple-typewriter";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./hero.css";
import { BackgroundEl } from "../design/Home/Home";
import heroA from "../../assets/home/heroA.svg";

const Hero = () => {
  return (
    <section className="relative backgroundNet height py-[5rem] lg:min-h-[85vh] lg:py-[10rem] grid grid-cols-1 gap-5 lg:grid-cols-2">
      <article className="text-center lg:text-start">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            // duration: 3,
          }}
          className="text-lg text-colorOffWhite select-none inline px-4 py-2 rounded-lg bg-gradient"
        >
          Welcome to my Portfolio
        </motion.p>
        <motion.h6
          initial={{ x: -100, opacity: 0.4 }}
          whileInView={{ x: 0, opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            // duration: 3,
          }}
          className="h6 font-normal mt-6"
        >
          Hi, I'm <span className="font-semibold">Habib Shah</span> a
        </motion.h6>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            // duration: 3,
          }}
          className="h1 text-gradient"
        >
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
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: true }}
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            // duration: 1,
          }}
          className="body-1 mt-5 w-full md:w-[95%] lg:w-[87%] xl:w-[82%]"
        >
          Innovative thinking is the cornerstone of my work. I constantly
          explore new ways to amplify the reach and effectiveness of my
          solutions, ensuring that the positive change I create can be scaled
          and replicated to drive widespread impact.
        </motion.p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 3,
          }}
        >
          <Link
            to="https://github.com/HabibSha/developers-personal-portfolio"
            target="_blank"
            className="mt-5 btnPrimary"
          >
            <span className="text-[orange]">&#9733;</span> Star Me On GitHub
          </Link>
        </motion.div>
      </article>
      <article className="relative flex items-center justify-center">
        <BackgroundEl />
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            // duration: 3,
          }}
          src={heroA}
          alt="HeroA"
          className="max-w-[90%] lg:w-[90%] lg:absolute lg:-top-[6rem] lg:left-[2rem] z-50"
        />
      </article>
    </section>
  );
};

export default Hero;
