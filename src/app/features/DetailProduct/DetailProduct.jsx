"use client";
import Image from "next/image";
import Count from "@/Components/Count/Count";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import { useToast } from "@/Components/ui/use-toast";
import { ToastAction } from "@/Components/ui/toast";
import { resetCount } from "@/app/redux/slices/countSlice";

const DetailProduct = ({ data, id_user }) => {
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
    <div className="flex flex-col w-full md:flex md:flex-row gap-4 ">
      {data ? (
        <>
          <div className="md:w-[50%] bg-gray-100  flex items-center justify-center rounded-md">
            <Image
              src={data?.image_url}
              width={900}
              height={700}
              alt="product-image"
              className="drop-shadow-lg "
            />
          </div>
          <div className="md:w-[50%] px-4 md:px-0  flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl" onClick={() => toaster()}>
                {data?.name_product}
              </p>

              <p className="font-semibold text-2xl">${data?.price}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Description</p>
              <p className="text-gray-500">{data?.description}</p>
            </div>
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
        </>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default DetailProduct;
