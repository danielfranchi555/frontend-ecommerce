"use client";
import { clearCookie } from "@/lib/cookies";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoExitOutline } from "react-icons/io5";
import { Profile } from "../Profile/Profile";

const DropDownMenu = ({ id_user }) => {
  const test = () => {
    clearCookie();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Cuenta</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Profile id_user={id_user} />
        <DropdownMenuItem className="cursor-pointer">Ordenes</DropdownMenuItem>
        <button
          onClick={() => test()}
          className="flex justify-between w-full items-center"
        >
          <DropdownMenuItem className=" w-full flex items-center justify-between cursor-pointer  gap-2">
            <span className="">Cerrar Sesion</span>
            <IoExitOutline className="" size={22} />
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
