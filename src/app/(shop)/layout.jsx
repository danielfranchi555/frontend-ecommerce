import Navbar from "@/Components/Navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
