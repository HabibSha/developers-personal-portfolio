import React from "react";

import { Route, Routes } from "react-router-dom";

import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
