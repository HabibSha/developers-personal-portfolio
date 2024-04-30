import { useState } from "react";

import { BsLightningFill } from "react-icons/bs";

import heroD from "../../assets/home/heroD.svg";

interface frontendSocial {
  id: string;
  title: string;
  icon: string;
}

interface frontendInfo {
  id: string;
  title: string;
  icon: string;
}

interface Props {
  frontendSocials: frontendSocial[];
  frontendinfos: frontendInfo[];
}

const FrontEnd: React.FC<Props> = ({ frontendSocials, frontendinfos }) => {
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
        <div className="pt-[10%] lg:pt-[24%]">
          <h2 className="h2 text-gradient mb-8">
            Responsive Frontend Development
          </h2>
          <div className="flex items-center gap-3 lg:gap-6 justify-center lg:justify-start lg:px-[2rem] ">
            {frontendSocials.map((frontendSocial) => {
              const { id, title, icon } = frontendSocial;
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
          {frontendinfos.map((frontend) => {
            const { id, title } = frontend;
            return (
              <div key={id} className="flex gap-3 mb-4">
                <div className="mt-[6px] lg:mt-2">
                  <BsLightningFill className="text-colorPink text-[19px]" />
                </div>
                <p className="body-1 text-start">{title}</p>
              </div>
            );
          })}
        </div>
        <div>
          <img src={heroD} alt="FrontEnd" className="w-[100%]" />
        </div>
      </article>
    </section>
  );
};

export default FrontEnd;
