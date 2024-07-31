"use client";
import { useEffect, useState } from "react";

// Custom hook para obtener productos y atributos por categoría
export const useFetchParam = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategory = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setData(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return {
    data,
    isPending: loading,
  };
};
