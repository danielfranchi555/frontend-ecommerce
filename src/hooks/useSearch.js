"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useSearch = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [empty, setEmpty] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (querySearch.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
      const encoded = encodeURI(querySearch || "");
      const resp = await fetch(
        `http://localhost:4000/api/search?q=${encoded}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!resp.ok) {
        console.log("error method post");
      }

      router.push(`/search?q=${encoded}`);
      setQuerySearch("");
    }
  };

  return { handleSubmit, querySearch, setQuerySearch, empty, setEmpty };
};

export default useSearch;
