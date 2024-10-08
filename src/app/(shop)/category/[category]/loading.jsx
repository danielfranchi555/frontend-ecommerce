import React from "react";

const loading = () => {
  return (
    <div className=" h-[700px] grid grid-cols-2 md:grid-cols-4 gap-4  ">
      <div className="w-[180px] md:w-full md:h-[400px] bg-gray-100 animate-pulse rounded-md px-4  "></div>
      <div className="w-[180px] md:w-[250px] md:h-[400px] bg-gray-100 animate-pulse rounded-md px-4 "></div>
      <div className="w-[180px] md:w-[250px] md:h-[400px] bg-gray-100 animate-pulse rounded-md px-4 "></div>
      <div className="w-[180px] md:w-[250px] md:h-[400px] bg-gray-100 animate-pulse rounded-md px-4 "></div>
      <div className="w-[180px] md:w-[250px] md:h-[400px] bg-gray-100 animate-pulse rounded-md px-4 "></div>
      <div className="w-[180px] md:w-[250px] md:h-[400px] bg-gray-100 animate-pulse rounded-md px-4 "></div>
    </div>
  );
};

export default loading;
