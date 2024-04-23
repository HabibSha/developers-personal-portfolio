import "./home.css";
import Hero from "../../components/Hero/Hero";
import styles from "../../style";
import { BackgroundDot } from "../../components/design/Home/Home";
import Profession from "../../components/Profession/Profession";

const Home: React.FC = () => {
  return (
    <section className="border-b-[1px]">
      <article className="relative h-auto pt-[9vh]">
        <div className="blur-leftCorner absolute"></div>
        <div className="blur-rightCorner absolute"></div>
        <div className="blur-bottomCorner absolute"></div>
        <div>
          <BackgroundDot />
        </div>
        <div className={`container mx-auto ${styles.paddingX}`}>
          <Hero />
        </div>
      </article>
      <article>
        <Profession />
      </article>
    </section>
  );
};

export default Home;
