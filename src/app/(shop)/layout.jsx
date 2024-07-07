import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";

const layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <h1>layout</h1>
      {children}
    </div>
  );
};

export default layout;
