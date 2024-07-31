import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuPackageOpen } from "react-icons/lu";
import { TfiWorld } from "react-icons/tfi";
import { TbZoomMoney } from "react-icons/tb";

const Banner = () => {
  return (
    <div className="text-black border rounded-xl mt-20 flex items-center justify-between py-6 divide-x-2 shadow-md">
      <div className=" px-4 flex gap-4 items-center">
        <CiDeliveryTruck size={25} />
        <div>
          <p className="font-bold ">Free Shiping</p>
          <span className="text-sm text-muted-foreground">
            On orders over $50.00
          </span>
        </div>
      </div>
      <div className=" px-4 flex gap-4 items-center">
        <LuPackageOpen size={25} />
        <div>
          <p className="font-bold ">Very easy to return</p>
          <span className="text-sm text-muted-foreground">
            Just phone number
          </span>
        </div>
      </div>
      <div className=" px-4 flex gap-4 items-center">
        <TfiWorld size={25} />
        <div>
          <p className="font-bold ">Worldwide delivery</p>
          <span className="text-sm text-muted-foreground">
            Fast delivery worldwide
          </span>
        </div>
      </div>
      <div className=" px-4 flex gap-4 items-center ">
        <TbZoomMoney size={25} />
        <div>
          <p className="font-bold ">Refunds policy</p>
          <span className="text-sm text-muted-foreground">
            60 days return for any reason
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
