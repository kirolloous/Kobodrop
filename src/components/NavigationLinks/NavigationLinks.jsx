import React from "react";
import "./NavigationLinks.css";
import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <>
      <NavLink to="/" className="nav-links">
        Learn
      </NavLink>
      <NavLink to="/" className="nav-links">
        Resources
      </NavLink>
      <NavLink to="/" className="nav-links">
        FAQs
      </NavLink>
    </>
  );
};

export default NavigationLinks;
