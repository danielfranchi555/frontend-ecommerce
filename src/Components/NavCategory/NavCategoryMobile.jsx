"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaFilter } from "react-icons/fa";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const NavCategoryMobile = () => {
  const [position, setPosition] = useState("bottom");

  const categories = [
    { name: "Remeras", href: "remeras" },
    { name: "Jeans", href: "jeans" },
    { name: "Camisas", href: "camisas" },
    { name: "Accesorios", href: "accesorios" },
    { name: "Camperas", href: "camperas" },
  ];
  const priceRange = [
    { price: "Precio Menor - Mayor", href: "minprice" },
    { price: "Precio Mayor - Menor", href: "maxprice" },
  ];

  return (
    <div className="flex justify-between w-full  md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Categories</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {categories.map((item) => (
              <Link href={`${item.href}`}>
                <DropdownMenuRadioItem value={item}>
                  {item.name}
                </DropdownMenuRadioItem>
              </Link>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu className="border border-red-300">
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {priceRange.map((item) => (
              <Link href={{ query: { price: item.href } }}>
                <DropdownMenuRadioItem value={item}>
                  {item.price}
                </DropdownMenuRadioItem>
              </Link>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavCategoryMobile;
