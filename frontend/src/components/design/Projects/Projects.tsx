import React, { useEffect, useRef } from "react";

import { ScrollParallax, ScrollParallaxHandle } from "react-just-parallax";

import dot from "../../../assets/home/dot.svg";

export const ProjectsBackgroundDots: React.FC = () => {
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
          <div className="blur-dot absolute left-[7%] top-[8%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[7%] top-[8%]" />
        </div>
        <div>
          <div className="blur-dot absolute left-[50%] top-[20%]"></div>
          <img src={dot} alt="" className="w-1 absolute left-[50%] top-[20%]" />
        </div>
        <div>
          <div className="blur-dot absolute right-[5%] top-[5%]"></div>
          <img src={dot} alt="" className="w-1 absolute right-[5%] top-[5%]" />
        </div>
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
