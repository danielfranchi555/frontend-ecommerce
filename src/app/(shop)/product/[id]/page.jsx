import React from "react";

const page = ({ params }) => {
  console.log(params);
  const product = params.id;
  return <div>detail product : {product}</div>;
};

export default page;
