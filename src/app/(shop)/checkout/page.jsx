import FormCheckout from "@/app/features/FormCheckout/FormCheckout";
import { getSession } from "@/lib/getUser";

const page = async () => {
  const infoUser = await getSession();
  const { id_user } = infoUser;

  const resp = await fetch(
    `http://localhost:4000/api/cart/get-products/${id_user}`
  );
  const productsCart = await resp.json();

  return (
    <>
      <FormCheckout productsCart={productsCart} id_user={id_user} />
    </>
  );
};

export default page;
