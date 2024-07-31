"use client";
import useSearch from "@/hooks/useSearch";
import { Input } from "../ui/input";

export const InputSearch = () => {
  const { handleSubmit, querySearch, setQuerySearch, empty } = useSearch();

  return (
    <form onSubmit={handleSubmit} className="md:w-[500px]">
      <Input
        value={querySearch || ""}
        className="border text-black border-black  w-full "
        type="text"
        placeholder="Search Product"
        onChange={(e) => setQuerySearch(e.target.value)}
      />
      {empty && <span className="text-xs  text-red-400">Ingresa un valor</span>}
    </form>
  );
};
