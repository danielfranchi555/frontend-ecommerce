"use client";
import Image from "next/image";
import Link from "next/link";
import Fade from "@/app/utils/MotionTransitions/Fade/Fade";

const ProductCarousel = ({ products }) => {
  const categories = [
    {
      name: "Camperas",
      href: "category/camperas",
      image:
        "https://res.cloudinary.com/dcotr8wpa/image/upload/v1721932165/tienda/camperas/Packable%20Puffer%20Jacket%20Midnight/1_p56lsz.webp",
    },
    {
      name: "Jeans",
      href: "category/jean",
      image:
        "https://res.cloudinary.com/dcotr8wpa/image/upload/v1722908448/tienda/jeans/501%2054S%20Ferry%20Building%20In/1_r1pdxa.webp",
    },
    {
      name: "Camisas",
      href: "category/camisas",
      image:
        "https://res.cloudinary.com/dcotr8wpa/image/upload/v1721929750/tienda/camisas/The%20Sunset%20Camp%20Shirt/1_gwcqzr.webp",
    },
    {
      name: "Accesorios",
      href: "category/accesorios",
      image:
        "https://res.cloudinary.com/dcotr8wpa/image/upload/v1721930126/tienda/accesorios/cintos/Worn%20Leather%20Belt/1_zijcoq.webp",
    },
    {
      name: "Remeras",
      href: "category/remeras",
      image:
        "https://res.cloudinary.com/dcotr8wpa/image/upload/v1722109396/tienda/remeras/Graphic%20Set%20In%20Neck%20Trekking/1_jvoeat.webp",
    },
  ];
  return (
    <div className="my-20 md:container">
      <h4 className="text-center text-2xl font-bold text-black py-2">
        Que estas buscando?
      </h4>

      <div className=" grid grid-cols-1 md:grid md:grid-cols-5 gap-2">
        {categories.map((item) => (
          <Fade>
            <div className="relative w-full h-full md:cursor-pointer md:hover:shadow-md md:transform md:transition md:duration-300 md:hover:scale-[1.01]">
              <Link href={item.href}>
                <Image src={item.image} width={350} height={200} alt="image" />
                <div className="w-full h-full bg-black/30 absolute top-0"></div>
                <div className="w-full h-full flex justify-center items-center absolute top-0">
                  <p className="text-white text-2xl">{item.name}</p>
                </div>
              </Link>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
