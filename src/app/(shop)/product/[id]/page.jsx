// "use client";
import DetailProduct from "@/app/features/DetailProduct/DetailProduct";
import { getSession } from "@/lib/getUser";

const page = async ({ params }) => {
  const session = await getSession();
  const id_user = session ? session.id_user : null;

  const id = params.id;
  const product = await fetch(`http://localhost:4000/api/products/${id}`);
  const data = await product.json();

  return (
    <div className="md:h-[700px] w-[85%] mx-auto mt-10 md:mt-0 md:w-[86%] md:mx-auto flex items-center justify-center">
      <DetailProduct data={data[0]} id_user={id_user} />
    </div>
  );
};

export default page;
