"use client";
import React, { useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { InputSearch } from "../InputSearch/InputSearch";
import { IoMenu } from "react-icons/io5";
import NavCategorie from "../navCategorie/NavCategorie";
import { IoIosArrowDown } from "react-icons/io";
import SheetDemo from "../Sheet/SheetDemo";

const Navbar = ({ id_user }) => {
  const [open, setOpen] = useState(false);
  const [openCategorie, setOpenCategorie] = useState(false);

  const toogle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className=" text-black  flex items-center justify-between py-4 px-4 w-full md:py-2">
        <Link href={"/"} className="flex items-center gap-4 ">
          <h2 className="text-[25px] font-bold">
            Shop<span className="font-light">Cart</span>
          </h2>
          <NavCategorie className="hidden md:block" />
        </Link>
        <div className="flex items-center md:hidden gap-4">
          <SheetDemo className="" id_user={id_user} />
          <IoMenu className="" size={30} onClick={() => toogle()} />
        </div>
        <div className="hidden md:flex md:items-center">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden md:flex  flex-col py-2 gap-2 ">
              <div className=" relative ">
                <InputSearch />
              </div>
            </div>
            <DropDownMenu id_user={id_user} />
            <div>
              <SheetDemo id_user={id_user} />
            </div>
          </div>
        </div>
      </div>
      <div>
        {open && (
          <div className="    flex  flex-col py-4 gap-4 px-4 md:hidden">
            <div className=" relative ">
              <InputSearch />
              <FiSearch className="absolute right-4 top-2 " size={20} />
            </div>
            <ul className=" border rounded-md py-0 px-2">
              <span
                onClick={() => setOpenCategorie(!openCategorie)}
                className="mb-0 w-full flex items-center justify-between py-2 font-bold "
              >
                Categorias <IoIosArrowDown size={20} />
              </span>
              {openCategorie && (
                <div className="flex flex-col gap-3">
                  <li className="text-sm">Remeras</li>
                  <li className="text-sm">Camisas</li>
                  <li className="text-sm">Jeans</li>
                  <li className="text-sm">Accesorios</li>
                  <li className="text-sm">Camperas</li>
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
