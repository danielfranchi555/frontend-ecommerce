import React from "react";
import { ModeToggle } from "../ModeToggle/ModeToggle";

const Navbar = () => {
  return (
    <div className="border-b py-4 px-4 flex items-center justify-between">
      <h1>Title</h1>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
