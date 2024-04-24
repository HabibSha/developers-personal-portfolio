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
          <div className="absolute -top-[16.5rem] -left-[17rem] translate-x-3 translate-y-3 -mt-32 blur-effect"></div>
          <div className="absolute -top-[16.5rem] -left-[17rem] w-[5rem]">
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
          <div className="absolute right-[13rem] top-[9rem] -translate-x-3 translate-y-3 -mt-32 blur-effect"></div>
          <div className="absolute w-[5rem] right-[13rem] top-[9rem]">
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
          <div className="absolute bottom-[19rem] left-[10rem] translate-x-4 -translate-y-3 blur-effect"></div>
          <div className="absolute w-[5rem] bottom-[19rem] left-[10rem]">
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
          <div className="absolute translate-y-3 -right-[14.5rem] blur-effect"></div>
          <div className="absolute w-[3.8rem] -right-[15rem]">
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
