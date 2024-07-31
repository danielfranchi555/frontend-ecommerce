import { NavAdmin } from "@/Components/NavAdmin/NavAdmin";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex md:flex-row w-[100%]">
      <div className="w-full md:w-[15%]">
        <NavAdmin />
      </div>
      <div className="w-[100%] px-0">{children}</div>
    </div>
  );
};

export default layout;
