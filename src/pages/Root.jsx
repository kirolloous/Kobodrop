import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Root = ({ children }) => {
  return (
    <main className="w-full h-screen  ">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Root;
