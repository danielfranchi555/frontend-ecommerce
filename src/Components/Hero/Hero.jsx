import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#211C24] w-[100%] md:h-auto  ">
      <div className="flex flex-col md:flex md:flex-row  md:w-[80%] md:mx-auto  lg:flex lg:flex-row lg:h-full lg:w-[80%] lg:mx-auto  ">
        <section className=" py-10 flex flex-col gap-4 justify-center items-center md:w-[60%] md:items-start lg:w-[60%] lg:items-start">
          <p className="text-2xl text-gray-500">Pro.Beyond.</p>
          <h1 className="text-6xl text-center text-white md:text-6xl md  lg:text-8xl">
            IPhone 14 <span className="">Pro</span>
          </h1>
          <p className="text-center text-gray-500 text-[16px]  px-2">
            Created to change everything for the better. For everyone
          </p>
          <button className="border border-white text-white px-14 py-4 rounded-lg">
            Shop Now
          </button>
        </section>
        <section className=" w-full h-full flex justify-center items-center md:w-[40%] lg:w-[40%]  ">
          <Image
            src="https://res.cloudinary.com/dcotr8wpa/image/upload/v1720388366/ecommerce/hero-ecommerce/hero-ecommerce_ihzvmu.png"
            width={500}
            height={400}
            className="rounded-xl  h-full object-cover "
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
