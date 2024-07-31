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

const DropDownMenu = () => {
  const test = () => {
    clearCookie();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Account</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Profile />
        <DropdownMenuItem>Orders</DropdownMenuItem>
        <button
          onClick={() => test()}
          className="flex justify-between w-full items-center"
        >
          <DropdownMenuItem>
            Log Out <IoExitOutline size={22} />
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
