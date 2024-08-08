import Fade from "@/app/utils/MotionTransitions/Fade/Fade";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Fade className="bg-[#F8FAFC] w-[100%] h-screen relative ">
      <Image
        src="https://res.cloudinary.com/dcotr8wpa/image/upload/v1722521783/tienda/hero/hero-image_lvaocj.jpg"
        width={1900}
        height={100}
        className="object-cover w-full h-screen "
      />
      <div className="bg-black/50 top-0  w-full h-screen absolute"></div>
      <div className=" absolute  top-0 w-full h-full flex justify-center items-center text-white">
        <div className=" left-[10%] absolute flex flex-col gap-4">
          <h1 className="text-white text-3xl md:text-6xl font-bold">
            Classic Cream Blouse Shirt
          </h1>
          <p className="text-sm md:text-2xl">
            Light breathable blouse for any condition
          </p>
          <button className="bg-slate-900 max-w-max px-2 py-4 text-sm md:text-2l  md:py-4  md:px-6 rounded-md hover:bg-primary/90">
            View More
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;
