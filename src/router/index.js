import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../pages/Main";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:username" element={<Main />} />
    </Routes>
  );
};
