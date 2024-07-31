"use client";
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { PiSignOutBold } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { GrMenu } from "react-icons/gr";
import { TbCategoryPlus } from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";

import Link from "next/link";
import UlMobile from "./UlMobile";

export const NavAdmin = () => {
  const [toogle, setToogle] = useState(false);

  const list = [
    { name: "Dashboard", href: "/", icon: <MdOutlineAnalytics size={20} /> },
    { name: "Orders", href: "/orders", icon: <BsCart3 size={20} /> },
    { name: "Users", href: "/users", icon: <FiUsers size={20} /> },
    { name: "Products", href: "/products", icon: <TbReportSearch size={20} /> },
    {
      name: "Categories",
      href: "categories",
      icon: <TbCategoryPlus size={20} />,
    },
    { name: "SignOut", href: "/signout", icon: <PiSignOutBold size={20} /> },
  ];

  const handleToogle = () => {
    setToogle(!toogle);
    console.log(toogle);
  };

  return (
    <div className="bg-gray-50 w-full  md:h-[100vh] md:flex md:flex-col md:justify-none gap-10 px-4 py-4">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <h4 className="font-bold text-1xl py-4">Admin Dashboard</h4>
        </Link>
        <GrMenu
          onClick={() => handleToogle()}
          className="md:hidden cursor-pointer"
          size={30}
        />
      </div>

      {toogle ? (
        <UlMobile list={list} />
      ) : (
        <div className="hidden md:py-4 md:flex md:flex-col md:gap-10">
          {list.map((item) => (
            <Link href={`/admin/${item.href}`}>
              <div className="flex items-center gap-2">
                {item.icon}
                <p className="text-1xl cursor-pointer ">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
