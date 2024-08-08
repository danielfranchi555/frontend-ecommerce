import NavCategory from "@/Components/NavCategory/NavCategory";
import NavCategoryMobile from "@/Components/NavCategory/NavCategoryMobile";

const layout = async ({ children }) => {
  return (
    <section className="flex flex-col md:flex md:flex-row w-[95%] gap-4 mx-auto mt-20 ">
      <div className=" md:w-[20%]">
        <NavCategory />
        <NavCategoryMobile />
      </div>
      <main className="flex-grow min-h-screen">{children}</main>
    </section>
  );
};

export default layout;
