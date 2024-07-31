import FormCheckout from "@/app/features/FormCheckout/FormCheckout";
import { getSession } from "@/lib/getUser";

const page = async () => {
  const { id_user } = await getSession();

  return (
    <>
      <FormCheckout id_user={id_user} />
    </>
  );
};

export default page;
