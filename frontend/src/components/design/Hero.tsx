import React, { useEffect, useState, useRef } from "react";

import { MouseParallax } from "react-just-parallax";

import "./hero.css";
import reactP from "../../assets/reactP.svg";
import tailwindP from "../../assets/tailwindP.svg";
import javasriptP from "../../assets/javascriptP.svg";
import cssP from "../../assets/cssP.svg";

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
        <div className="relative">
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
        <div className="relative">
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
        <div className="relative">
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
        <div className="relative">
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
