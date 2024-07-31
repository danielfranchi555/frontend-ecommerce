import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const resp = await fetch(`http://localhost:4000/api/orderByAdmin/${id}`);
  const data = await resp.json();

  return <div>order detail: {JSON.stringify(data)}</div>;
};

export default page;
