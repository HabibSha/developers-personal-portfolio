import { Link } from "react-router-dom";

import styles from "../../style";
import errorpage from "../../assets/error/errorpage.svg";

const Error = () => {
  return (
    <section>
      <article className="relative h-screen pt-[9vh]">
        <div className="blur-leftCorner absolute"></div>
        <div className="blur-rightCorner absolute"></div>
        <div className="blur-bottomCorner absolute"></div>
        <div className={`container mx-auto ${styles.paddingX}`}>
          <div className="pt-6">
            <Link
              to="/"
              className="text-gradient font-[500] hover:border-b-[1px] duration-300 border-colorPink pb-1"
            >
              Go back to Home &#8594;
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={errorpage}
              alt="Error Page"
              className="w-[100%] lg:w-[80%] mt-[8rem] lg:mt-[0rem]"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Error;
