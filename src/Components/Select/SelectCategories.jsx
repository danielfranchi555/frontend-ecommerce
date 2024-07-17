"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SelectCategories = () => {
  const router = useRouter();
  const category = ["Phones", "Headphones", "Ipad", "Laptop"];
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelect = (value) => {
    setSelectedCategory(value);
    router.push(`/category/${value}`);
  };
  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Categorie" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {category.map((item, index) => (
            <SelectItem key={index} value={`${item}`}>
              <span onClick={() => router.push(`/category/${item}`)}>
                {item}
              </span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategories;
