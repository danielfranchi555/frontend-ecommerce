import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../ProductCard/ProductCard";
const CarouselImages = ({ data }) => {
  return (
    <div className="w-full mt-20 ">
      <h4 className="font-bold text-2xl py-2">Similar Products</h4>
      <Carousel>
        <CarouselContent className="basis-3/3 ">
          {data.products.map((item) => (
            <ProductCard item={item} size={"200px"} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselImages;
