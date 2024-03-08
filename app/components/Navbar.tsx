import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="max-w-screen-md w-full flex justify-between items-center py-5 mx-auto  dark:bg-[#121212] fixed top-0 z-10 backdrop-blur-xl px-10">
      <h1>
        AK`s <span className="text-primary font-bold">BLOG</span>
      </h1>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
