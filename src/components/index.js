import React from "react";
import { Sidebar } from "./Sidebar";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="relative h-screen w-screen flex overflow-hidden font-poppins font-semibold text-text-primary">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-10 overflow-auto h-screen pb-32 bg-light-grey">
          {children}
        </div>
      </div>
    </div>
  );
};
