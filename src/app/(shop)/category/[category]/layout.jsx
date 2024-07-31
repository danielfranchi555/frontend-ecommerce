import NavCategory from "@/Components/NavCategory/NavCategory";

const layout = async ({ children }) => {
  return (
    <section className="flex w-[85%] gap-4 mx-auto mt-20 ">
      <div className=" w-[30%]">
        <NavCategory />
      </div>
      {children}
    </section>
  );
};

export default layout;
