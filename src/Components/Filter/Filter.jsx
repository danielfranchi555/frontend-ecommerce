import Link from "next/link";
import React from "react";

const Filter = ({ searchParams }) => {
  const params = searchParams || "";

  const handleFilter = (filter) => {};
  console.log(params);

  return (
    <div>
      <ul className="">
        <p className="font-bold text-1xl">Filter</p>
        <Link href={`?filter=maxPrice`}>
          <li className="text-sm cursor-pointer">Max Price</li>
        </Link>
        <Link href={`?filter=minPrice`}>
          <li className="text-sm cursor-pointer">Min Price</li>
        </Link>
      </ul>
    </div>
  );
};

export default Filter;
