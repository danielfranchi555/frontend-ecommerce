"use client";
import Count from "@/Components/Count/Count";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { useToast } from "@/Components/ui/use-toast";
import { useAddProductMutation } from "@/app/redux/slices/ApiSlice/cartApiSlice";
import { resetCount } from "@/app/redux/slices/countSlice";

const DetailProduct = ({ data, id_user, sizes }) => {
  const { toast } = useToast();
  const count = useSelector((state) => state.count.value);
  const [addProduct, { isSuccess, isLoading }] = useAddProductMutation();
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  //product para la funcion addToCart
  const object = {
    user_id: id_user,
    cart_items: [
      {
        product_id: data.id_product,
        quantity: count,
        price: data.price,
        img_url: data.image_url,
        name_product: data.name_product,
        size: size,
      },
    ],
  };
  //product para el toast
  const product = {
    name: data.name_product,
    quantity: count,
  };

  const addSize = (item, index) => {
    setSize(item);
    console.log({ item: item, index: index });
  };

  const addToCart = async () => {
    if (size === "") {
      console.log("elegir el talle");
      toast({
        title: "Elegir un talle  ",
        description: `Porfavor elegir un talle antes de continuar con la compra`,
      });
    } else {
      addProduct(object);
      toast({
        title: "Producto Agregado ",
        description: `Producto: ${product.name}, Cantidad: ${product.quantity}, talle: ${size}`,
      });
      dispatch(resetCount());
      setSize("");
    }
  };

  return (
    <div className="col-span-3 px-4">
      <div className="grid grid-cols-1 gap-4">
        <h1 className="text-3xl ">{data.name_product}</h1>
        <h2 className="font-bold text-2xl">${data.price}</h2>
        <div className="flex gap-4">
          <span className="font-bold">Talles Disponibles:</span>
          {sizes?.map((item, index) => (
            <span
              key={index}
              onClick={() => addSize(item.size_name, index)}
              className={`text-black border px-2 rounded-md hover:bg-slate-200 cursor-pointer ${
                size === item.size_name ? "bg-slate-200" : ""
              }`}
            >
              {item.size_name}
            </span>
          ))}
        </div>
        <div>
          <p className="text-md">{data.description}</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Count />
          <Button
            onClick={() => addToCart()}
            className="bg-[#111827] shadow-md w-full rounded-md text-white px-5 py-2"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
