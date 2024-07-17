import React from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Link from "next/link";
import { Input } from "../ui/input";
import SheetDemo from "../Sheet/SheetDemo";
import { FiSearch } from "react-icons/fi";
import { getSession } from "@/lib/getUser";

const Navbar = async () => {
  const session = await getSession();
  const id_user = session ? session.id_user : null;

  return (
    <div className="border-b py-4 px-6 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <Link href="/">
          <h1 className="text-xl font-bold">Ecommerce</h1>
        </Link>
      </div>
      <div className="w-[500px] relative ">
        <Input type="text" placeholder="Search Product" />
        <FiSearch className="absolute right-4 top-2 " size={20} />
      </div>
      <div className="flex items-center justify-center gap-4">
        <DropDownMenu />
        <div>
          <SheetDemo id_user={id_user} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
