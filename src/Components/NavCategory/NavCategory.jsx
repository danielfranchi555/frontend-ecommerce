import Link from "next/link";
import React from "react";

const NavCategory = () => {
  const links = [
    { name: "Jeans", href: "jeans" },
    { name: "Remeras", href: "remeras" },
    { name: "Camisas", href: "camisas" },
    { name: "Accesorios", href: "accesorios" },
    { name: "Camperas", href: "camperas" },
  ];

  return (
    <div className="hidden md:flex flex-col gap-6 divide-y">
      <div>
        <h4 className="text-1xl font-bold mb-4">Categories</h4>
        <ul className="flex flex-col gap-2">
          {links.map((item) => (
            <Link href={`${item.href}`} key={item.href}>
              <li className="text-md cursor-pointer">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="py-4">
        <h4 className="text-1xl font-bold mb-4">Ordenar Por</h4>
        <ul className="flex flex-col gap-2">
          <Link href={{ query: { price: "minprice" } }}>
            <li className="cursor-pointer">Precio Menor - Mayor</li>
          </Link>
          <Link href={{ query: { price: "maxprice" } }}>
            <li className="cursor-pointer">Precio Mayor - Menor</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavCategory;
