"use client";
import Link from "next/link";
import React from "react";

const NavCategory = () => {
  const links = ["jeans", "remeras", "camisas", "accesorios", "camperas"];

  return (
    <div className="flex flex-col gap-6 divide-y">
      <div>
        <h4 className="text-1xl font-bold mb-4">Categories</h4>
        <ul className="flex flex-col gap-2">
          {links.map((item) => (
            <Link href={`${item}`} key={item}>
              <li className="text-sm">{item}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="py-4">
        <h4 className="text-1xl font-bold mb-4">Order By</h4>
        <ul>
          <li>Price Low - High</li>
          <li>Price High - Low</li>
        </ul>
      </div>
    </div>
  );
};

export default NavCategory;
