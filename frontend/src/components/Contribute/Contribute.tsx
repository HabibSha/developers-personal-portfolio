import React from "react";

import "./contribute.css";
import openAi from "../../assets/contribute/openAi.png";
import reactTraining from "../../assets/contribute/reacttraining.png";
import greatlearning from "../../assets/contribute/greatlearning.png";
import google from "../../assets/contribute/google.png";
import stackoverflow from "../../assets/contribute/stackoverflow.png";
// import firecampapp from "../../assets/contribute/firecampapp.png";
import freecodecamp from "../../assets/contribute/freecodecamp.png";
import meta from "../../assets/contribute/meta.png";
import w3schools from "../../assets/contribute/w3school.png";
import codeacademy from "../../assets/contribute/codeacademy.png";

const Contribute = () => {
  return (
    <section>
      <article className="flex items-center justify-center gap-[3rem] bg-orange-500">
        <div className="flex justify-between items-center gap-[3rem] scrollXA-infinite select-none">
          <img src={openAi} alt="" className="w-[8rem]" />
          <img src={reactTraining} alt="" className="w-[8rem]" />
          <img src={greatlearning} alt="" className="w-[8rem]" />
          <img src={google} alt="" className="w-[8rem]" />
          <img src={stackoverflow} alt="" className="w-[9rem]" />
          <img src={w3schools} alt="" className="w-[5rem]" />
          <img src={freecodecamp} alt="" className="w-[9rem]" />
          <img src={meta} alt="" className="w-[9rem]" />
          <img src={codeacademy} alt="" className="w-[8rem]" />
        </div>
        <div className="flex justify-between items-center gap-[3rem] scrollXB-infinite  select-none scrollX-infinite">
          <img src={openAi} alt="" className="w-[8rem]" />
          <img src={reactTraining} alt="" className="w-[8rem]" />
          <img src={greatlearning} alt="" className="w-[8rem]" />
          <img src={google} alt="" className="w-[8rem]" />
          <img src={stackoverflow} alt="" className="w-[9rem]" />
          <img src={w3schools} alt="" className="w-[5rem]" />
          <img src={freecodecamp} alt="" className="w-[9rem]" />
          <img src={meta} alt="" className="w-[9rem]" />
          <img src={codeacademy} alt="" className="w-[8rem]" />
        </div>
      </article>
    </section>
  );
};

export default Contribute;
