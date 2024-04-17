import { Outlet } from "react-router-dom";

import "./layout.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { navLinks } from "../components/constants/index.ts";

const Layout = () => {
  const flexItems = "flex items-center justify-between";
  return (
    <>
      <Header navLinks={navLinks} flexItems={flexItems} />
      <main className="pt-0 min-h-[calc(100vh)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
