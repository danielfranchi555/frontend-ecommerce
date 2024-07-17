"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import svg from "../../../public/client-svg.svg";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const CarouselCards = ({ clients }) => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full   rounded-md text-black"
    >
      <div className=" mb-10">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <CarouselContent>
        {clients.map((item, index) => (
          <CarouselItem
            key={index}
            className=" md:basis-1/2 lg:basis-1/2 bg-white  px-4"
          >
            <div className="rounded-md  flex flex-col gap-4 p-4 ">
              <div>
                <p className="text-gray-500 text-sm h-[80px] md:text-base  md:h-[70px]  border-l-2 px-2 border-[#007580]">
                  {item.testimonial}
                </p>
              </div>
              <div className="flex flex-row  justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    class="inline-block h-18 w-12 md:w-14 rounded-full ring-2 ring-white "
                    src={item.image}
                    width={50}
                    height={50}
                  />
                  <div>
                    <p className="text-md">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.rol}</p>
                  </div>
                </div>
                <Image src={svg} width={100} height={100} />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselCards;
