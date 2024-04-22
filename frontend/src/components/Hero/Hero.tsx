import { Typewriter } from "react-simple-typewriter";

import { BackgroundEl } from "../design/Hero";

const Hero = () => {
  return (
    <section className="relative py-[10rem] grid grid-cols-1 grid-flow-row lg:grid-cols-2 md:gap-5">
      <article>
        <p className="text-lg text-colorOffWhite select-none inline px-4 py-2 rounded-lg bg-gradient">
          Welcome to my Portfolio
        </p>
        <h6 className="h6 font-normal mt-6">
          Hi, I'm <span className="font-semibold">Habib Shah</span> a
        </h6>
        <h1 className="h1 text-gradient">
          <Typewriter
            words={[
              "MERN Stack Web Developer",
              "Responsive Frontend Developer",
              "Backend Website Developer",
            ]}
            loop={Infinity}
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={2000}
            cursor
            cursorStyle="_"
          />
        </h1>
        <p className="body-1 mt-5 w-full md:w-[95%] lg:w-[85%] xl:w-[70%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          quidem fuga dicta, assumenda rem aspernatur! amet consectetur
          adipisicing elit. Deserunt quidem fuga dicta, assumenda rem
          aspernatur!.
        </p>
        <button className="mt-5 cursor-pointer ring-1 ring-colorIndigo px-3 py-1">
          Connect with me
        </button>
      </article>
      <article>
        <BackgroundEl />
      </article>
    </section>
  );
};

export default Hero;
