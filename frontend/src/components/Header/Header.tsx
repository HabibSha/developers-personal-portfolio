import { useState } from "react";

import { NavLink } from "react-router-dom";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

import styles from "../../style";

type NavLink = {
  id: string;
  link: string;
  title: string;
};
type HeaderProps = {
  navLinks: NavLink[];
};

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      // enablePageScroll;
    } else {
      setOpenNavigation(true);
      // disablePageScroll;
    }
  };

  return (
    <section
      className={`bg-transparent w-full h-[9vh] ${styles.borderBottom} ${styles.flexCenter} fixed z-50`}
    >
      <nav
        className={`${styles.flexBetween} ${styles.resContainer} ${styles.paddingX}`}
      >
        <div className="text-2xl font-bold">Portfolio</div>
        <ul className={`${styles.flexBetween} hidden md:flex`}>
          {navLinks.map((navLink, index) => {
            const { id, link, title } = navLink;
            return (
              <li key={id} className={`${styles.flexBetween} gap-4`}>
                <NavLink
                  to={link}
                  className={`${
                    index === navLinks.length - 1
                      ? "mr-0"
                      : "mr-[2.8rem] lg:mr-[4rem]"
                  } hover:text-colorPink duration-300`}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <article onClick={toggleNavigation} className="md:hidden">
          {openNavigation ? (
            <RiCloseFill className="text-3xl cursor-pointer" />
          ) : (
            <RiMenu4Fill className="text-3xl cursor-pointer" />
          )}
        </article>

        {/* className={({ isActive }) =>
              isActive ? "font-bold" : "font-medium"
            } */}

        {/* Mobile Menu */}
        <div
          className={`${
            !openNavigation ? "translate-x-[100%]" : "translate-x-[0]"
          } md:hidden transition duration-500 w-full h-screen absolute pt-[10rem] top-[9vh] right-0 bg-orange-600 `}
        >
          <ul className={`h-full flex flex-col items-center`}>
            {navLinks.map((navLink, index) => {
              const { id, link, title } = navLink;
              return (
                <li key={id} className={`${styles.flexBetween}`}>
                  <NavLink
                    to={link}
                    className={`${
                      index === navLinks.length - 1 ? "mb-0" : "mb-[3.5rem]"
                    } hover:text-gradient`}
                  >
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
