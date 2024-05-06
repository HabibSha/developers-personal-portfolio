import React, { useEffect, useState, useRef } from "react";

import {
  MouseParallax,
  ScrollParallax,
  ScrollParallaxHandle,
} from "react-just-parallax";

import "./home.css";
import reactP from "../../../assets/reactP.svg";
import tailwindP from "../../../assets/tailwindP.svg";
import javasriptP from "../../../assets/javascriptP.svg";
import cssP from "../../../assets/cssP.svg";
import dot from "../../../assets/home/dot.svg";

export const BackgroundEl: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="absolute bottom-[0rem] lg:top-[20rem]">
      <MouseParallax
        strength={0.07}
        enableOnTouchDevice
        isAbsolutelyPositioned
        parallaxContainerRef={parallaxRef}
      >
        <div className="">
          <div className="absolute bottom-[21rem] -left-[11rem] sm:bottom-[23.5rem] sm:-left-[14rem] md:bottom-[27.5rem] md:-left-[16rem] lg:-top-[15rem] lg:-left-[12.8rem] xl:-top-[14.5rem] xl:-left-[16rem] 2xl:-top-[16.5rem] 2xl:-left-[17rem] translate-x-3 translate-y-3 -mt-32 blur-effect w-[1.8rem] sm:w-[2.5rem] lg:w-[2.6rem] xl:w-[3rem]"></div>
          <div className="absolute bottom-[15.5rem] -left-[10.5rem] sm:bottom-[18rem] sm:-left-[14.1rem] md:bottom-[22.5rem] md:-left-[16rem] lg:-top-[15rem] lg:-left-[13rem] xl:-top-[14.5rem] xl:-left-[16rem] 2xl:-top-[16.5rem] 2xl:-left-[17rem] w-[2.8rem] sm:w-[3.5rem] md:w-[4rem] xl:w-[5rem]">
            <img
              src={reactP}
              alt="React Icon"
              className={`-mt-32 animate-spin-infinite ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>
        <div className="">
          <div className="absolute right-[5.8rem] bottom-[3rem] sm:right-[8rem] sm:bottom-[3.5rem] md:right-[9rem] md:bottom-[3rem] lg:right-[9rem] lg:top-[3rem] xl:right-[11rem] xl:top-[7rem] 2xl:right-[13rem] 2xl:top-[10rem] -translate-x-3 translate-y-3 -mt-32 blur-effect w-[1.8rem] sm:w-[2.5rem] lg:w-[2.6rem] xl:w-[3rem]"></div>
          <div className="absolute right-[5.8rem] bottom-[-2.4rem] sm:right-[8.5rem] sm:bottom-[-1.6rem] md:right-[9rem] md:bottom-[-1.6rem] lg:right-[9rem] lg:top-[3rem] xl:right-[11rem] xl:top-[7rem] 2xl:right-[13rem] 2xl:top-[10rem]  w-[2.8rem] sm:w-[3.5rem] md:w-[4rem] xl:w-[5rem]">
            <img
              src={tailwindP}
              alt="Tailwind Icon"
              className={`-mt-32 animate-pendulum ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>
        <div className="">
          <div className="absolute bottom-[18.7rem] left-[8.7rem] sm:bottom-[21rem] sm:left-[11.7rem] md:bottom-[26rem] md:left-[14rem] lg:top-[-20rem] lg:left-[10.5rem] xl:top-[-20rem] xl:left-[10.5rem] 2xl:top-[-20rem] 2xl:left-[12rem] translate-x-4 -translate-y-3 blur-effect w-[1.8rem] sm:w-[2.5rem] lg:w-[2.6rem] xl:w-[3rem]"></div>
          <div className="absolute bottom-[20rem] left-[9rem] sm:bottom-[22rem] sm:left-[12rem] md:bottom-[26rem] md:left-[14rem] lg:top-[-22rem] lg:left-[10.5rem] xl:top-[-22rem] xl:left-[10.5rem] 2xl:top-[-22rem] 2xl:left-[12rem] w-[2.8rem] sm:w-[3.5rem] md:w-[4rem] xl:w-[5rem]">
            <img
              src={javasriptP}
              alt="Javacript Icon"
              className={`-mt-26 animate-scale ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>
        <div className="">
          <div className="absolute translate-y-3 -right-[11.3rem] bottom-[3rem] sm:-right-[15rem] sm:bottom-[3rem] md:-right-[16.5rem] md:bottom-[2.9rem] lg:-right-[13.5rem] lg:-top-[4rem] xl:-right-[15.5rem] xl:top-[0rem] 2xl:-right-[16.5rem] 2xl:top-[2rem] blur-effect w-[1.8rem] sm:w-[2.5rem] lg:w-[2.6rem] xl:w-[3rem]"></div>
          <div className="absolute -right-[11.5rem] bottom-[2rem] sm:-right-[15rem] sm:bottom-[2rem] md:-right-[17rem] md:bottom-[2rem] lg:-right-[14rem] lg:-top-[4rem] xl:-right-[16rem] xl:top-[0rem] 2xl:-right-[17rem] 2xl:top-[2rem] w-[2.5rem] sm:w-[3rem] md:w-[3.5rem] xl:w-[4.5rem]">
            <img
              src={cssP}
              alt="CSS Icon"
              className={`-mt-26 rotate-[30deg] ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>
      </MouseParallax>
    </section>
  );
};

export const BackgroundDot: React.FC = () => {
  const scrollParallaxRef = useRef<ScrollParallaxHandle | null>(null);

  useEffect(() => {
    scrollParallaxRef.current?.updateValues();
  }, []);

  return (
    <section>
      <ScrollParallax
        strength={0.07}
        enableOnTouchDevice
        isAbsolutelyPositioned
        ref={scrollParallaxRef}
      >
        <div>
          <div className="blur-dot absolute left-[5rem] top-[10rem]"></div>
          <img
            src={dot}
            alt=""
            className="w-1 absolute left-[5rem] top-[10rem]"
          />
        </div>
        <div>
          <div className="blur-dot absolute right-[5rem] top-[30%]"></div>
          <img
            src={dot}
            alt=""
            className="w-1 absolute right-[5rem] top-[30%]"
          />
        </div>
        <div>
          <div className="blur-dot absolute left-[50%] top-[4rem]"></div>
          <img
            src={dot}
            alt=""
            className="w-1 absolute left-[50%] top-[4rem]"
          />
        </div>
        <div>
          <div className="blur-dot absolute left-[30%] top-[30%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[30%] top-[30%]" />
        </div>
        <div>
          <div className="blur-dot absolute left-[10%] top-[60%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[10%] top-[60%]" />
        </div>
        <div>
          <div className="blur-dot absolute left-[40%] top-[80%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[40%] top-[80%]" />
        </div>
        <div>
          <div className="blur-dot absolute right-[20%] top-[83%]"></div>
          <img
            src={dot}
            alt=""
            className="w-1 absolute right-[20%] top-[83%]"
          />
        </div>
        <div>
          <div className="blur-dot absolute left-[50%] top-[45%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[50%] top-[45%]" />
        </div>
        <div>
          <div className="blur-dot absolute right-[25%] top-[15%]"></div>
          <img
            src={dot}
            alt=""
            className="w-1 absolute right-[25%] top-[15%]"
          />
        </div>
        <div>
          <div className="blur-dot absolute left-[20%] -bottom-[5%]"></div>
          <img
            src={dot}
            alt=""
            className="w-1 absolute left-[20%] -bottom-[5%]"
          />
        </div>
        <div>
          <div className="blur-dot absolute right-[10%] top-[5%]"></div>
          <img src={dot} alt="" className="w-1 absolute right-[10%] top-[5%]" />
        </div>
      </ScrollParallax>
    </section>
  );
};

export const ProfessionBackgroundDot: React.FC = () => {
  const scrollParallaxRef = useRef<ScrollParallaxHandle | null>(null);

  useEffect(() => {
    scrollParallaxRef.current?.updateValues();
  }, []);

  return (
    <section>
      <ScrollParallax
        strength={0.07}
        enableOnTouchDevice
        isAbsolutelyPositioned
        ref={scrollParallaxRef}
      >
        <div>
          <div className="blur-dot absolute left-[5%] bottom-[15%]"></div>
          <img
            src={dot}
            alt=""
            className="w-1 absolute left-[5%] bottom-[15%]"
          />
        </div>
        <div>
          <div className="blur-dot absolute right-[5%] top-[30%]"></div>
          <img src={dot} alt="" className="w-1 absolute right-[5%] top-[30%]" />
        </div>
        <div>
          <div className="blur-dot absolute left-[50%] top-[70%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[50%] top-[70%]" />
        </div>
        <div>
          <div className="blur-dot absolute left-[3%] top-[35%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[3%] top-[35%]" />
        </div>
        <div>
          <div className="blur-dot absolute left-[10%] top-[60%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[10%] top-[60%]" />
        </div>
        <div>
          <div className="blur-dot absolute left-[40%] top-[80%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[40%] top-[80%]" />
        </div>
        <div>
          <div className="blur-dot absolute right-[20%] top-[83%]"></div>
          <img
            src={dot}
            alt=""
            className="w-1 absolute right-[20%] top-[83%]"
          />
        </div>
        <div>
          <div className="blur-dot absolute left-[50%] top-[45%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[50%] top-[45%]" />
        </div>
        <div>
          <div className="blur-dot absolute right-[25%] top-[15%]"></div>
          <img
            src={dot}
            alt=""
            className="w-1 absolute right-[25%] top-[15%]"
          />
        </div>
        <div>
          <div className="blur-dot absolute left-[20%] -bottom-[5%]"></div>
          <img
            src={dot}
            alt=""
            className="w-1 absolute left-[20%] -bottom-[5%]"
          />
        </div>
        <div>
          <div className="blur-dot absolute right-[6%] top-[65%]"></div>
          <img src={dot} alt="" className="w-1 absolute right-[6%] top-[65%]" />
        </div>
      </ScrollParallax>
    </section>
  );
};

export const BackgroundBox: React.FC = () => {
  const scrollParallaxRef = useRef<ScrollParallaxHandle | null>(null);

  useEffect(() => {
    scrollParallaxRef.current?.updateValues();
  }, []);

  return (
    <section>
      <ScrollParallax
        strength={0.07}
        enableOnTouchDevice
        isAbsolutelyPositioned
        ref={scrollParallaxRef}
      >
        <div>
          <div className="blur-box absolute left-[5%] top-[25%] translate-y-2 lg:translate-x-6 lg:translate-y-6"></div>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/3-d-cube-11355607-9113600.png"
            alt="3D Cube"
            className="w-[3rem] lg:w-[5rem] animate-pendulum absolute left-[5%] top-[25%]"
          />
        </div>
        <div>
          <div className="blur-boxB absolute right-[9%] top-[8.5%]"></div>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/3-d-cube-11355161-9113627.png"
            alt="3D Cube"
            className="w-[3rem] lg:w-[5rem] animate-pendulum absolute right-[8%] top-[7.7%]"
          />
        </div>
      </ScrollParallax>
    </section>
  );
};
