import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Fade from "@/app/utils/MotionTransitions/Fade/Fade";

const HeroOffert = () => {
  return (
    <Fade className="w-full relative h-[300px] md:h-[600px]">
      <Image
        src={
          "https://res.cloudinary.com/dcotr8wpa/image/upload/v1722567270/tienda/hero/hero-2_am7rix.jpg"
        }
        width={1400}
        height={800}
        alt="image-offert"
        className="w-full h-full object-cover"
      />
      <div className="bg-black/40 absolute top-0 w-full h-full"></div>
      <div className="absolute top-0 h-full flex flex-col gap-4 justify-center items-start w-[300px]  md:w-[600px] left-[10%]">
        <h4 className=" text-2xl md:text-6xl  text-white">
          Descubre las mejores tendencias de moda
        </h4>
        <Button className="px-8 py-6 ">Ver mas</Button>
      </div>
    </Fade>
  );
};

export default HeroOffert;
