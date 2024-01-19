import React from "react";
import { Sidebar } from "./Sidebar";
import Navbar from "./Navbar";

export const Layout = ({ children, isAuthenticated }) => {
  return (
    <div className="relative h-screen w-screen flex overflow-hidden">
      {/* <img
        src={process.env.PUBLIC_URL + "/pngs/background.png"}
        alt="background"
        className="absolute w-screen h-screen z-[-1]"
      /> */}

      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-10 overflow-auto h-screen pb-32">{children}</div>
      </div>
    </div>
  );
};
