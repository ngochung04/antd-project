import React from "react";
import { Route, Routes } from "react-router-dom";
import Setting from "../components/setting";
import Home from "../components/setting";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
};

export default index;
