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
    <section className="flex flex-col md:flex md:flex-row gap-4 md:w-[50%]  ">
      <div className=" order-last flex md:flex md:flex-col md:order-none  gap-4">
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
      <Image
        src={selected}
        width={450}
        height={400}
        alt="product-image"
        className={`transition-opacity duration-300 ${
          fade ? "opacity-5" : "opacity-100"
        }`}
      />
    </section>
  );
};

export default SelectedImage;
