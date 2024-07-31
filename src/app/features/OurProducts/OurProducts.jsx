"use client";
import React, { useState } from "react";
import ProductCard from "@/Components/ProductCard/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductCarousel = ({ products }) => {
  return (
    <div className="my-20">
      <h4 className="text-2xl font-bold text-black py-2">Latest Products</h4>
      <Carousel>
        <CarouselContent className='className="basis-3/3"'>
          {products.map((item) => (
            <ProductCard item={item} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
