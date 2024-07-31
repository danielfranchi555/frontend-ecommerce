"use client";
import Image from "next/image";
import Count from "@/Components/Count/Count";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import { useToast } from "@/Components/ui/use-toast";
import { Toast, ToastAction, ToastProvider } from "@/Components/ui/toast";
import { resetCount } from "@/app/redux/slices/countSlice";
import SelectedImage from "@/Components/SelectedImage/SelectedImage";

const DetailProduct = ({ data, id_user, sizes, imagesRow }) => {
  const [cart, setCart] = useState([]); // Estado local para el carrito
  const { toast } = useToast();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.value);

  const object = {
    user_id: id_user,
    cart_items: [
      {
        product_id: data.id_product,
        quantity: count,
        price: data.price,
        img_url: data.image_url,
        name_product: data.name_product,
      },
    ],
  };

  const addToCart = async () => {
    try {
      const resp = await fetch("http://localhost:4000/api/cart/add-product", {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!resp.ok) {
        throw new Error("Error al agregar producto al carrito");
      } else {
        const respuesta = await resp.json();
        console.log("log antes del toast");
        toast({
          title: "Product Added ",
          description: `Name: ${data?.name_product}, Quantity:${count}, Price: $${data?.price}`,
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });

        console.log("log despues del toast");
        dispatch(resetCount());
        setCart((prevCart) => [...prevCart, object.cart_items[0]]);
      }
    } catch (error) {
      console.log({ message: error });
    }
  };
  useEffect(() => {
    console.log("producto agregado");
  }, [cart]);

  return (
    <div className="flex flex-col w-full md:flex md:flex-row mt-10 gap-4    ">
      {data ? (
        <>
          <SelectedImage data={data} imagesRow={imagesRow} />
          <section className=" w-full flex flex-col md:flex md:flex-row  gap-4 md:w-[50%]">
            <div className="  md:px-0  flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-2xl">{data?.name_product}</p>

                <p className="font-semibold text-2xl">${data?.price}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold">Description</p>
                <p className="text-gray-500">{data?.description}</p>
              </div>
              <ul className="flex items-center gap-4">
                <p>Talles:</p>
                {sizes?.map((item) => (
                  <li className="border px-2 cursor-pointer hover:bg-slate-100">
                    {item.size_name}
                    <span>Stock:{item.stock}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-6  ">
                <Count />
                <Button
                  onClick={() => addToCart()}
                  className="bg-[#111827] shadow-md w-full  rounded-md text-white px-5 py-2 "
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </section>
        </>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default DetailProduct;
