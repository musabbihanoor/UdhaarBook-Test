import React from "react";
import { Route, Routes } from "react-router-dom";

import Menu from "../pages/Menu";
import Favorites from "../pages/Favorites";
import Random from "../pages/Random";
import About from "../pages/About";
import Meals from "../pages/Meals";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/random" element={<Random />} />
      <Route path="/about" element={<About />} />
      <Route path="/meals/:category" element={<Meals />} />
    </Routes>
  );
};
