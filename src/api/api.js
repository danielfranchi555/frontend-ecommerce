export const getProducts = async () => {
  const resp = await fetch("http://localhost:4000/api/products", {
    credentials: "include",
  });
  const data = await resp.json();
  return data;
};
