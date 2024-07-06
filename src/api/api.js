export const getProducts = async () => {
  const resp = await fetch("http://localhost:4000/api/products", {
    method: "GET",
    credentials: "include",
  });
  const data = await resp.json();
  return data;
};
