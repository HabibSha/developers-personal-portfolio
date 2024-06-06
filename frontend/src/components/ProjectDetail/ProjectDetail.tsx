import React from "react";

import { GoDotFill } from "react-icons/go";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import "./projectDetail.css";

interface Image {
  id: string;
  image: string;
}

interface Feature {
  id: string;
  feature: string;
}

interface ProjectList {
  id: string;
  title: string;
  desc: string;
  technology: string;
  images: Image[];
  link: string;
  live: string;
  features: Feature[];
}

interface Props {
  projectLists: ProjectList[];
}

const ProjectDetail: React.FC<Props> = ({ projectLists }) => {
  const { slug } = useParams();
  const project = projectLists.find(
    (project) => project.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, desc, features, technology, images, link, live } = project;

  return (
    <section className="relative py-[5rem]">
      <article className="bg-glassEffect px-6 py-10">
        <div className="border-b-[1px] border-colorIndigo pb-6">
          <h2 className="h2 text-gradient font-[500]">{title}</h2>
          <p className="body-1 mt-5">{desc}</p>
          <h6 className="h6 mt-6 text-gradient font-[600]">Features</h6>
          {features.map((featureA) => {
            const { id, feature } = featureA;
            return (
              <div key={id} className="mt-2">
                <p className="flex items-center gap-4">
                  <GoDotFill className="text-colorPink" />{" "}
                  <span className="body-1">{feature}</span>
                </p>
              </div>
            );
          })}
          <h6 className="h6 mt-3 text-gradient font-[600]">Technology</h6>
          <p className="body-1 mt-2">
            <span className="text-colorPink font-semibold mr-2">-</span>{" "}
            {technology}
          </p>
          <div className="flex items-center gap-5 mt-4">
            <Link
              to={link}
              target="_blank"
              className="flex items-center gap-2 btnSecondary"
            >
              <FaGithub />
              <span>GitHub</span>
            </Link>
            <Link
              to={live}
              target="_blank"
              className="flex items-center gap-2 btnSecondary"
            >
              <FaExternalLinkAlt />
              <span>Live</span>
            </Link>
          </div>
        </div>
        <div className="pt-6">
          {images.map((imageA) => {
            const { id, image } = imageA;
            return (
              <img key={id} src={image} alt="" className={`mb-6 rounded-sm`} />
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default ProjectDetail;
