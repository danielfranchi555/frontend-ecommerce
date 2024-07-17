import React from "react";

const page = ({ params }) => {
  const cat = params.cat;
  return <div>category:{cat}</div>;
};

export default page;
