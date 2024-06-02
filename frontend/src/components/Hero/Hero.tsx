import { Typewriter } from "react-simple-typewriter";

import "./hero.css";
import { BackgroundEl } from "../design/Home/Home";
import heroA from "../../assets/home/heroA.svg";

const Hero = () => {
  return (
    <section className="relative height py-[5rem] lg:min-h-[85vh] lg:py-[10rem] grid grid-cols-1 gap-5 lg:grid-cols-2">
      <article className="text-center lg:text-start">
        <p className="text-lg text-colorOffWhite select-none inline px-4 py-2 rounded-lg bg-gradient">
          Welcome to my Portfolio
        </p>
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
        <button className="mt-5 cursor-pointer ring-1 ring-colorIndigo px-3 py-1">
          Connect with me
        </button>
      </article>
      <article className="relative flex items-center justify-center">
        <BackgroundEl />
        <img
          src={heroA}
          alt="HeroA"
          className="max-w-[90%] lg:w-[90%] lg:absolute lg:-top-[6rem] lg:left-[2rem] z-50"
        />
      </article>
    </section>
  );
};

export default Hero;
