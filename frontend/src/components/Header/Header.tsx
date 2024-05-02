import { useState, useEffect } from "react";

import { NavLink as BaseNavLink } from "react-router-dom";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

import styles from "../../style";
import "./header.css";
import logo from "../../assets/logo.png";

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
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const bodyElement = document.body;
    if (openNavigation) {
      disableBodyScroll(bodyElement);
    } else {
      enableBodyScroll(bodyElement);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [openNavigation]);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleMenuClose = () => {
    setOpenNavigation(false);
  };

  return (
    <section
      className={`w-full transition-all duration-300 ease-in-out  ${
        styles.flexCenter
      } fixed z-50 ${
        isShrunk
          ? "h-[8vh] bg-opacity-90 backdrop-blur-[8px]"
          : "bg-transparent h-[9vh]"
      }`}
    >
      <nav className={`${styles.flexBetween} container ${styles.paddingX}`}>
        <div>
          <img src={logo} alt="Logo" className="w-[10rem]" />
        </div>
        <ul className={`${styles.flexBetween} hidden md:flex`}>
          {navLinks.map((navLink, index) => {
            const { id, link, title } = navLink;
            return (
              <li key={id} className={`${styles.flexBetween} gap-4`}>
                <BaseNavLink
                  to={link}
                  className={`${
                    index === navLinks.length - 1
                      ? "mr-0"
                      : "mr-[2.8rem] lg:mr-[4rem]"
                  } hover:text-colorPink hover:font-[500] duration-300 ease-linear`}
                  activeClassName="active"
                >
                  {title}
                </BaseNavLink>
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
          } md:hidden transition duration-500 w-full h-screen absolute pt-[7.5rem] lg:pt-[10rem] ${
            isShrunk ? "top-[8vh]" : "top-[9vh]"
          } right-0 bg-colorPink`}
        >
          <ul className={`h-full flex flex-col items-center`}>
            {navLinks.map((navLink, index) => {
              const { id, link, title } = navLink;
              return (
                <li key={id} className={`${styles.flexBetween}`}>
                  <BaseNavLink
                    to={link}
                    onClick={handleMenuClose}
                    className={`${
                      index === navLinks.length - 1 ? "mb-0" : "mb-[3.5rem]"
                    } hover:text-gradient`}
                  >
                    {title}
                  </BaseNavLink>
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
