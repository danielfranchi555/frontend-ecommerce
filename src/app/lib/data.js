export const fetchProducts = async (category, query) => {
  try {
    const url = query
      ? `http://localhost:4000/api/products/category/${category}?price=${query}`
      : `http://localhost:4000/api/products/category/${category}`;

    const resp = await fetch(url, {
      next: { revalidate: 3600 },
    });
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log({ message: error });
  }
};
