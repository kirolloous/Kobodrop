import React, { useState } from "react";
import Logo from "../Logo/Logo";
import BurgerMenuOpen from "../../assets/Mobile Assets/Burger Menu Open.svg";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="md:pt-6 md:pb-4 mx-auto flex w-full items-center flex-wrap ">
      <nav className=" w-full flex items-center md:px-28   justify-between  h-12  pr-3  pl-4">
        <div className="flex items-center justify-center gap-10">
          <Logo />
          <div className="hidden md:flex items-center justify-center gap-8">
            <NavigationLinks />
          </div>
        </div>
        <button className="hidden md:block text-white bg-darkBlue py-3 px-5 rounded-xl border-darkBlue border-[1px]">
          Install Kobodrop
        </button>

        <button onClick={toggleNavBar} className=" md:hidden ">
          <img className=" cursor-pointer" src={BurgerMenuOpen} alt="" />
        </button>
      </nav>
      {isOpen && (
        <div
          className={`bg-darkBlue text-white flex flex-col items-center basis-full flex-wrap py-4 gap-2  transition-opacity duration-1000  ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <NavigationLinks />
        </div>
      )}
    </header>
  );
};

export default NavBar;
