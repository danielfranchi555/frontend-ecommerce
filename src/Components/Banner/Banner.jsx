import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuPackageOpen } from "react-icons/lu";
import { TfiWorld } from "react-icons/tfi";
import { TbZoomMoney } from "react-icons/tb";
import Fade from "@/app/utils/MotionTransitions/Fade/Fade";

const Banner = () => {
  return (
    <Fade className="text-black grid grid-cols-2  gap-4 w-[95%] md:w-[75%] mx-auto border rounded-xl mt-20 md:flex md:items-center md:justify-between py-6 divide-x-2 shadow-md">
      <div className=" px-4 flex gap-4 items-center">
        <CiDeliveryTruck size={25} />
        <div>
          <p className="font-bold text-sm md:text-md ">Free Shiping</p>
          <span className=" textsmuted-foreground text-xs">
            On orders over $50.00
          </span>
        </div>
      </div>
      <div className=" px-4 flex gap-4 items-center">
        <LuPackageOpen size={25} />
        <div>
          <p className="text-sm font-bold md:text-md ">Very easy to return</p>
          <span className="text-sm text-muted-foreground">
            Just phone number
          </span>
        </div>
      </div>
      <div className=" px-4 flex gap-4 items-center">
        <TfiWorld size={25} />
        <div>
          <p className="text-sm font-bold md:text-md ">Worldwide delivery</p>
          <span className="text-sm text-muted-foreground">
            Fast delivery worldwide
          </span>
        </div>
      </div>
      <div className=" px-4 flex gap-4 items-center ">
        <TbZoomMoney size={25} />
        <div>
          <p className="text-sm font-bold md:text-md ">Refunds policy</p>
          <span className="text-sm text-muted-foreground">
            60 days return for any reason
          </span>
        </div>
      </div>
    </Fade>
  );
};

export default Banner;
