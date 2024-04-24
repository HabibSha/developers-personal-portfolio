import MernStack from "../MernStack/MernStack";
import { mernSocials } from "../Constants";
import "./profession.css";

// import heroC from "../../assets/home/heroC.svg";
// import heroD from "../../assets/home/heroD.svg";
// import javascript from "../../assets/social/javascriptGrad.svg";

const Profession: React.FC = () => {
  return (
    <section className="pt-[5rem] ">
      <div className="text-center">
        <p className="text-xl">Services</p>
        <h2 className="h1 mt-1 mb-4 font-bold">What I do_?</h2>
        <span className="gradient-line"></span>
      </div>
      <article className="relative">
        <MernStack mernSocials={mernSocials} />
      </article>
    </section>
  );
};

export default Profession;
