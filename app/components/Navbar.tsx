import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-4 py-5">
      <h1>
        This is <span className="text-primary font-bold">navbar</span>
      </h1>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
