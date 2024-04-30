import React from "react";

import { Link } from "react-router-dom";

import "./edugraduation.css";
import { BsLightningFill } from "react-icons/bs";

interface Detail {
  id: string;
  desc: string;
}

interface EducationInfo {
  id: string;
  institute: string;
  subject: string;
  accomplish: string;
  image: string;
  details: Detail[];
  link: string;
}

interface Props {
  educationInfos: EducationInfo[];
}

const EduGraduation: React.FC<Props> = ({ educationInfos }) => {
  return (
    <section className="relative py-[5rem]">
      <article className="text-center">
        <h2 className="h2 text-gradient font-[500]">
          Degrees and Under Graduation
        </h2>
      </article>
      {educationInfos.map((education) => {
        const { id, institute, subject, accomplish, image, details, link } =
          education;
        return (
          <article
            key={id}
            className="grid grid-cols-1 gap-5 lg:grid-cols-5 mt-10"
          >
            <div className="flex justify-center lg:justify-end items-center">
              <img
                src={image}
                alt="Green University of Bangladesh"
                className="w-[13rem] p-2 border-[1px] border-colorIndigo rounded-full"
              />
            </div>
            <div className="pb-3 lg:col-span-4 rounded-md bg-glassEffect">
              <div className="py-3 px-4 bg-gradientR rounded-tl-md rounded-tr-md flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <div className="mb-1 lg:mb-0">
                  <h5 className="h5 font-semibold mb-1">{institute}</h5>
                  <h6 className="h6">{subject}</h6>
                </div>
                <p className="text-[13px] md:text-[14px] lg:text-[16px] font-[500]">
                  {accomplish}
                </p>
              </div>
              <div className="pb-3 pt-6 px-4">
                {details.map((detail) => {
                  const { id, desc } = detail;
                  return (
                    <div key={id} className="flex gap-3 mb-4">
                      <div className="mt-[6px] lg:mt-2">
                        <BsLightningFill className="text-colorPink text-[19px] animate-pulse" />
                      </div>
                      <p className="body-1 text-start">{desc}</p>
                    </div>
                  );
                })}
                <div className="mt-10 text-end">
                  <Link to={link} target="_blank" className="btnPrimary">
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </article>
        );
      })}
    </section>
  );
};

export default EduGraduation;
