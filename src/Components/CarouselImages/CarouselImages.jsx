"use client";
import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const CarouselImages = ({ data }) => {
  const [curr, setCurr] = useState(0);
  const numProducts = data?.products.length || 0;

  // Determine number of cards to show based on screen width
  const getCardsToShow = () => {
    if (window.innerWidth < 640) return 1; // Mobile: 1 card
    if (window.innerWidth < 768) return 2; // Tablet: 2 cards
    return 5; // Desktop: 5 cards
  };

  const cardsToShow = getCardsToShow();
  const cardWidth = 250; // Width of each card in pixels
  const cardGap = 10; // Gap between cards in pixels
  const containerWidth = cardsToShow * (cardWidth + cardGap); // Total width to show the cards at a time

  // Update card width and gap for responsiveness
  const cardStyle = { width: cardWidth, marginRight: cardGap };

  // Prev function with boundary check
  const prev = () => {
    if (curr > 0) {
      setCurr(curr - 1);
    }
  };

  // Next function with boundary check
  const next = () => {
    if (curr < numProducts - cardsToShow) {
      setCurr(curr + 1);
    }
  };

  return (
    <div className="relative w-full mt-10 overflow-hidden">
      <h1 className="font-bold text-2xl py-2">Similar Products</h1>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * (cardWidth + cardGap)}px)`,
          width: numProducts * (cardWidth + cardGap), // Adjust container width based on the number of products
        }}
      >
        {data?.products.map((item, index) => (
          <div key={index} className="flex-shrink-0" style={cardStyle}>
            <ProductCard item={item} size="250px" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className={`p-2 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white ${
            curr === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous slide"
          disabled={curr === 0}
        >
          <GrFormPrevious size={40} />
        </button>
        <button
          onClick={next}
          className={`p-2 rounded-full bg-white/80 text-gray-800 shadow hover:bg-white ${
            curr >= numProducts - cardsToShow
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          aria-label="Next slide"
          disabled={curr >= numProducts - cardsToShow}
        >
          <MdNavigateNext size={40} />
        </button>
      </div>
    </div>
  );
};

export default CarouselImages;
