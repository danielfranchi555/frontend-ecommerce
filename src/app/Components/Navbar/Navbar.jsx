import React from "react";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import Profile from "../Profile/Profile";

const Navbar = () => {
  return (
    <div className="border-b py-4 px-4 flex items-center justify-between">
      <h1>Title</h1>
      <div className="flex items-center justify-center gap-2">
        <Profile />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
