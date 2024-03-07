import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="max-w-screen-md w-full flex justify-between items-center py-5 fixed top-0 mx-auto px-2">
      <h1>
        AK`s <span className="text-primary font-bold">BLOG</span>
      </h1>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
