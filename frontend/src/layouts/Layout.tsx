import { Outlet } from "react-router-dom";

import "./layout.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-0 min-h-[calc(100vh)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
