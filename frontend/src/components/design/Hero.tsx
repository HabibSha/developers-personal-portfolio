import React, { useEffect, useState, useRef } from "react";

import { MouseParallax } from "react-just-parallax";

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
    <section className="absolute top-[20rem] ">
      <MouseParallax
        strength={0.07}
        enableOnTouchDevice
        isAbsolutelyPositioned
        parallaxContainerRef={parallaxRef}
      >
        <div className="absolute w-[5rem]">
          <img
            src={reactP}
            alt="React Spin"
            className={`-mt-32 animate-spin-infinite ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute w-[5rem] -right-[15rem]">
          <img
            src={tailwindP}
            alt="Tailwind Spin"
            className={`-mt-32 animate-pulse ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div>
          <div className="absolute w-[7rem] h-[7rem] rounded-full backdrop-filter backdrop-blur-3xl bg-[pink]"></div>
          <div className="absolute w-[5rem]">
            <img
              src={javasriptP}
              alt="Tailwind Spin"
              className={`-mt-26 animate-pulse ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>
        <div className="absolute w-[5rem] -right-[15rem]">
          <img
            src={cssP}
            alt="Tailwind Spin"
            className={`-mt-26 animate-pulse ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </section>
  );
};
