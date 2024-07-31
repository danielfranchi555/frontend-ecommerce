"use client";
import { schemaCheckout } from "@/app/schemaForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import Image from "next/image";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { MdDeleteOutline } from "react-icons/md";

const FormCheckout = ({ id_user }) => {
  const [productsCart, setProductsCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  //get products from cart
  const getCart = async () => {
    const resp = await fetch(
      `http://localhost:4000/api/cart/get-products/${id_user}`
    );
    const prods = await resp.json();
    setProductsCart(prods);
  };
  //methods from react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemaCheckout) });

  const totalOrder = productsCart?.reduce(
    (acc, prod) => acc + prod.quantity * prod.price,
    0
  );

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const resp = await fetch("http://localhost:4000/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: id_user,
          infoOrder: data,
          total_amount: totalOrder,
          productsCart,
        }),
      });

      if (!resp.ok) {
        console.log("error en la peticion");
      } else {
        setLoading(true);
        setConfirm(true);
      }

      const respDelete = await fetch(
        `http://localhost:4000/api/cart/remove-all-products`,
        {
          method: "DELETE",
          body: JSON.stringify({ user_id: id_user }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!respDelete.ok) {
        console.log("no se eliminaron los productos");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  const deleteProd = async (id_cart_item) => {
    const object = {
      user_id: id_user,
      id_cart_item: id_cart_item,
    };
    const resp = await fetch(`http://localhost:4000/api/cart/remove-product`, {
      method: "DELETE",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!resp.ok) {
      console.log("error delete product");
    }

    console.log("product deleted");
  };

  useEffect(() => {
    getCart();
  }, [productsCart]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[90%] mx-auto mt-16 ">
        <div className="grid grid-cols-2 gap-4  ">
          <article className=" flex flex-col gap-8 ">
            <div className="border rounded-md flex flex-col gap-2  ">
              <div className="border-b px-4 rounded-md flex gap-4 items-center  w-full h-full py-4 ">
                <div className="flex items-center gap-2 ">
                  <IoPersonCircleOutline
                    className="border rounded-full px-[4px]"
                    color="gray"
                    size={28}
                  />
                  <h3 className="text">Contact Info</h3>
                </div>
              </div>
              <div action="" className="flex gap-4 text-sm px-4 py-4">
                <div className="w-[50%]">
                  <Label htmlFor="terms">Your phone number</Label>
                  <Input
                    name="phone_number"
                    {...register("phone_number")}
                    type="number"
                    placeholder="Phone"
                  />
                  {errors.phone_number?.message && (
                    <p className="text-xs text-red-400">
                      {errors.phone_number?.message}
                    </p>
                  )}{" "}
                </div>
                <div className="w-[50%]">
                  <Label htmlFor="terms">Email Address</Label>
                  <Input
                    name="email_address"
                    {...register("email_address")}
                    type="email"
                    placeholder="Email"
                  />
                  {errors.email_address?.message && (
                    <p className="text-xs text-red-400">
                      {errors.email_address?.message}
                    </p>
                  )}{" "}
                </div>
              </div>
            </div>
            <div className="border rounded-md flex flex-col gap-2  ">
              <div className="border-b px-4 rounded-md flex gap-4 items-center  w-full h-full py-4 ">
                <div className="flex items-center gap-2 ">
                  <LiaShippingFastSolid
                    className="border rounded-full px-[4px]"
                    color="gray"
                    size={28}
                  />
                  <h3 className="text">Shipping Address</h3>
                </div>
              </div>
              <div
                action=""
                className="grid grid-cols-2 gap-4 text-sm px-4 py-4"
              >
                <div className="">
                  <Label htmlFor="terms">First name</Label>
                  <Input
                    name="first_name"
                    {...register("first_name")}
                    type="text"
                    placeholder="firtsname"
                  />
                  {errors.first_name?.message && (
                    <p className="text-xs text-red-400">
                      {errors.first_name?.message}
                    </p>
                  )}{" "}
                </div>
                <div className="">
                  <Label htmlFor="terms">Last Name</Label>
                  <Input
                    name="last_name"
                    {...register("last_name")}
                    type="text"
                    placeholder="last name"
                  />
                  {errors.last_name?.message && (
                    <p className="text-xs text-red-400">
                      {errors.last_name?.message}
                    </p>
                  )}{" "}
                </div>
                <div className="">
                  <Label htmlFor="terms">Address</Label>
                  <Input
                    name="address"
                    {...register("address")}
                    type="text"
                    placeholder="address"
                  />
                  {errors.address?.message && (
                    <p className="text-xs text-red-400">
                      {errors.address?.message}
                    </p>
                  )}{" "}
                </div>
                <div className="">
                  <Label htmlFor="terms">Postal Code</Label>
                  <Input
                    name="postal_code"
                    type="text"
                    placeholder="Postalcode"
                    {...register("postal_code")}
                  />
                  {errors.postal_code?.message && (
                    <p className="text-xs text-red-400">
                      {errors.postal_code?.message}
                    </p>
                  )}{" "}
                </div>
              </div>
            </div>
          </article>
          <article className=" border-blue-500 divide-y ">
            <h3 className="font-bold text-2xl ">Order Summary</h3>
            <div className=" flex flex-col gap-4 divide-y ">
              {productsCart
                ? productsCart.map((prod) => (
                    <div className="flex text-sm py-4 ">
                      <div className="flex gap-2 w-full">
                        <Image
                          src={prod.img_url}
                          width={100}
                          height={100}
                          alt="image-prod"
                          className=" bg-gray-100 rounded-md drop-shadow-md"
                        />
                        <div className="flex flex-col  w-full h-full ">
                          <p className="font-bold">
                            {" "}
                            {prod.name_product.toUpperCase()}
                          </p>
                          <p className="">Quantity: {prod.quantity}</p>
                        </div>
                      </div>
                      <div className=" flex flex-col gap-2 items-center justify-center">
                        <span className="font-bold">${prod.price}</span>
                        <MdDeleteOutline
                          onClick={() => deleteProd(prod.id_cart_item)}
                          className="cursor-pointer"
                          size={25}
                        />
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            <div className="text-sm flex flex-col gap-2 items-center justify-center py-4 ">
              <div className="text-gray-500 w-full flex justify-between ">
                <p>Shipping estimate</p>
                <span>$5</span>
              </div>
              <div className="text-gray-500 w-full flex justify-between ">
                <p>Tax estimate</p>
                <span>$15</span>
              </div>
              <div className=" w-full flex justify-between font-bold">
                <p>Order Total</p>
                <span>${totalOrder}</span>
              </div>
              {confirm ? (
                <Button>Confirmed</Button>
              ) : (
                <Button
                  type="submit"
                  className={`w-full rounded-md shadow-md ${
                    productsCart?.length > 0
                      ? "bg-red-100"
                      : "bg-red-950 disabled:opacity-100"
                  }`}
                >
                  {loading ? <p>LOADING</p> : <p>confirm order</p>}
                </Button>
              )}
            </div>
          </article>
        </div>
      </div>
    </form>
  );
};

export default FormCheckout;
