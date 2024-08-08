"use client";
import Image from "next/image";
import React, { useState } from "react";

const CarouselDetail = ({ imagesRow, product }) => {
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
    <div className="grid col-span-1 md:col-span-2 ">
      <div className="flex flex-col md:flex  md:flex-row  gap-4">
        <div className="flex  order-last gap-4 md:flex-col md:order-first ">
          {imagesRow.map((item) => (
            <Image
              src={item.image}
              width={250}
              height={100}
              alt="img-slide"
              className={`w-[70px] md:w-[100px]  ${
                selected === item.image ? " border-2 border-slate-900" : ""
              } hover:shadow-md cursor-pointer transition-all ease-in-out`}
              onClick={() => handleImage(item.image)}
            />
          ))}
        </div>
        <div className="w-full  md:h-[650px] ">
          <Image
            src={selected}
            width={1080}
            height={900}
            alt="image-detail"
            className={` transition-opacity duration-300 ${
              fade ? "opacity-5" : "opacity-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselDetail;
