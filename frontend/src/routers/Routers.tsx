import { Route, Routes } from "react-router-dom";

import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Projects from "../pages/Project/Projects";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
