"use client";
import Image from "next/image";
import React, { useState } from "react";

const SelectedImage = ({ imagesRow }) => {
  const [selected, setSelected] = useState(imagesRow[0].image);
  const [fade, setFade] = useState(false);

  const handleImage = (img) => {
    setFade(true);
    setTimeout(() => {
      setSelected(img);
      setFade(false);
    }, 200); // Duración del efecto fade (300ms)  };
  };

  return (
    <section className="flex flex-col md:flex md:flex-row w-[100%]">
      <div className=" h-full md:order-last w-[80%]">
        <Image
          src={selected}
          width={700}
          height={700}
          className={` transition-opacity duration-300 ${
            fade ? "opacity-5" : "opacity-100"
          }`}
        />
      </div>
      <div className="  h-full flex items-center md:order-first md:flex md:flex-col md:items-start gap-4 w-[20%]">
        {imagesRow.map((item) => (
          <Image
            onClick={() => handleImage(item.image)}
            src={item.image}
            width={80}
            height={80}
            alt="image"
            className={`${
              selected === item.image ? " border-2 border-slate-900" : ""
            } hover:shadow-md cursor-pointer transition-all ease-in-out`}
          />
        ))}
      </div>
      {/* <div className=" order-last flex md:flex md:flex-col md:order-none border gap-4  w-[100%] md:w-[20%]">
        {imagesRow.map((item) => (
          <Image
            onClick={() => handleImage(item.image)}
            src={item.image}
            width={300}
            height={80}
            alt="image"
            className={`w-[70px] md:w-full ${
              selected === item.image ? " border-2 border-slate-900" : ""
            } hover:shadow-md cursor-pointer transition-all ease-in-out`}
          />
        ))}
      </div>
      <div className="w-[100%] md:w-[80%]">
        <Image
          src={selected}
          width={950}
          height={400}
          alt="product-image"
         
        />
      </div> */}
    </section>
  );
};

export default SelectedImage;
