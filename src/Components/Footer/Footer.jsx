import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className=" border-t-[1px] w-full mt-20">
      <div className=" h-full flex flex-col md:flex md:justify-between gap-4 w-[85%] mx-auto py-10  text-black ">
        <div className="flex flex-col gap-4 md:flex md:flex-row justify-between w-full">
          <div className="">
            <h6 className="font-bold text-2xl">
              Shop<span className="font-light">Cart</span>
            </h6>
            <div className="flex items-center gap-4">
              <ImFacebook2 size={30} />
              <FaInstagramSquare size={35} />
            </div>
          </div>
          <div>
            <form
              action=""
              className="border w-full mx-auto px-4 py-6 rounded-xl bg-slate-50 flex flex-col gap-4 text-sm"
            >
              <p className="text-gray-500 text-md">
                Sign up for our newsletter and join the Transparent community.
              </p>
              <Input
                placeholder="Ingresa tu email"
                className="text-black border border-black"
                type="text"
                name=""
                id=""
              />
              <Button>Enviar</Button>
            </form>
          </div>
        </div>
        <div className="text-sm flex flex-col gap-6 md:flex md:flex-row justify-between border-t-[1px] py-4">
          <div className=" flex flex-col gap-4 md:flex md:flex-row">
            <p>© 2024 Transparents</p>
            <p>Terms of Service</p>
            <p>Privacy & Cookies policy</p>
          </div>
          <p className="">hello@transparent</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
