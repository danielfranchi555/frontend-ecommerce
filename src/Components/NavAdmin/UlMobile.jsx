import Link from "next/link";
import React from "react";

const UlMobile = ({ list }) => {
  return (
    <div className="py-4 flex flex-col gap-8 md:hidden ">
      {list.map((item) => (
        <Link href={`/admin/${item.href}`}>
          <div className="flex items-center gap-2">
            {item.icon}
            <p className="text-1xl cursor-pointer ">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UlMobile;
