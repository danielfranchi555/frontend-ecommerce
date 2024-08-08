"use client";
import { Input } from "../ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const InputSearch = () => {
  const searchParams = useSearchParams();
  const pahtname = usePathname();
  const router = useRouter();
  console.log({ pathname: pahtname });

  const handleInput = useDebouncedCallback((e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    router.replace(`${pahtname}?${params.toString()}`);
    router.push(`/search?${params.toString()}`);
  }, 200);

  return (
    <Input
      className="border text-black border-black w-full  md:w-[300px] "
      type="text"
      placeholder="Search Product"
      onChange={handleInput}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
};
