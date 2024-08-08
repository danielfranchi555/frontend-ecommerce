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

const CarouselCards = ({ clients }) => {
  return (
    <div className=" w-full text-black ">
      <Carousel>
        <CarouselContent className="md:basis-1/2 lg:basis-1/1">
          {clients.map((item) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="px-4 bg-white flex flex-col gap-4 py-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt="image"
                    className="rounded-full"
                  />
                  <div className="flex  flex-col">
                    <p>{item.name}</p>
                    <p className="text-xs text-gray-400">{item.rol}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] h-[80px]">{item.testimonial}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselCards;
