import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.svg";
const Logo = () => {
  return (
    <NavLink to="/" className="flex items-center justify-center gap-2">
      <img src={logo} alt="" />
      <h1 className=" text-darkBlue font-bold text-xl">Kobodrop</h1>
    </NavLink>
  );
};

export default Logo;
