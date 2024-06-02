import { useState } from "react";

import { BsLightningFill } from "react-icons/bs";

import "./mern.css";
import heroB from "../../assets/home/heroB.svg";

interface MernSocial {
  id: string;
  title: string;
  icon: string;
}

interface MernInfo {
  id: string;
  title: string;
  icon: string;
}

interface Props {
  mernSocials: MernSocial[];
  mernInfos: MernInfo[];
}

const MernStack: React.FC<Props> = ({ mernSocials, mernInfos }) => {
  const [hoverState, setHoverState] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (id: string) => {
    setHoverState({ ...hoverState, [id]: true });
  };
  const handleMouseLeave = (id: string) => {
    setHoverState({ ...hoverState, [id]: false });
  };

  return (
    <section>
      <article className="grid text-center gap-0 lg:text-start lg:grid-cols-2 lg:gap-5">
        <div className="order-2 lg:order-1">
          <img src={heroB} alt="MERN Stack" className="max-w-[100%] z-50" />
        </div>
        <div className="pt-[10%] lg:pt-[28%] order-1 lg:order-2">
          <h2 className="h2 text-gradient mb-8">MERN Stack Development</h2>
          <div className="flex items-center gap-3 lg:gap-6 justify-center lg:justify-start lg:px-[2rem]">
            {mernSocials.map((mernSocial) => {
              const { id, title, icon } = mernSocial;
              return (
                <div id={id} className="relative">
                  <img
                    src={icon}
                    alt=""
                    className="w-10 mb-[2rem]"
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={() => handleMouseLeave(id)}
                  />
                  <span
                    className={`absolute -top-7 -left-4 bg-gradient px-1 ${
                      hoverState[id] ? "block" : "hidden"
                    }`}
                  >
                    {title}
                  </span>
                </div>
              );
            })}
          </div>
          {mernInfos.map((mern) => {
            const { id, title } = mern;
            return (
              <div key={id} className="flex gap-3 mb-4">
                <div className="mt-[6px] lg:mt-2">
                  <BsLightningFill className="text-colorPink text-[19px] animate-pulse" />
                </div>
                <p className="body-1 text-start">{title}</p>
              </div>
            );
          })}

          {/* <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/3-d-cube-11355607-9113600.png"
            alt=""
            className="w-[10%]"
          /> */}
          {/* <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/3-d-cube-11355161-9113627.png"
            alt=""
            className="w-[10%]"
          /> */}

          {/* not so good */}
          {/* <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/beveled-cube-11179488-8943607.png"
            alt=""
            className="w-[10%]"
          /> */}
          {/* <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/cube-10888878-8762031.png"
            alt=""
            className="w-[10%]"
          /> */}
        </div>
      </article>
    </section>
  );
};

export default MernStack;
