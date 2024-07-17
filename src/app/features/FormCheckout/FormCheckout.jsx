"use client";
import { schemaCheckout } from "@/app/schemaForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import Image from "next/image";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

const FormCheckout = ({ id_user, productsCart }) => {
  const cartProducts = useSelector((state) => state.cart.value);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemaCheckout) });

  const totalOrder = cartProducts.reduce(
    (acc, prod) => acc + prod.quantity * prod.price,
    0
  );
  const onSubmit = async (data) => {
    try {
      const resp = await fetch("http://localhost:4000/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: id_user,
          infoOrder: data,
          totalAmount: totalOrder,
          productsCart,
        }),
      });

      if (!resp.ok) {
        console.log("error en la peticion");
      } else {
        console.log("order generada");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                    name="phone"
                    {...register("phone")}
                    type="number"
                    placeholder="Phone"
                  />
                  {errors.phone?.message && (
                    <p className="text-xs text-red-400">
                      {errors.phone?.message}
                    </p>
                  )}{" "}
                </div>
                <div className="w-[50%]">
                  <Label htmlFor="terms">Email Address</Label>
                  <Input
                    name="email"
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                  />
                  {errors.email?.message && (
                    <p className="text-xs text-red-400">
                      {errors.email?.message}
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
                    name="firstname"
                    {...register("firstname")}
                    type="text"
                    placeholder="firtsname"
                  />
                  {errors.firstname?.message && (
                    <p className="text-xs text-red-400">
                      {errors.firstname?.message}
                    </p>
                  )}{" "}
                </div>
                <div className="">
                  <Label htmlFor="terms">Last Name</Label>
                  <Input
                    name="lastname"
                    {...register("lastname")}
                    type="text"
                    placeholder="last name"
                  />
                  {errors.lastname?.message && (
                    <p className="text-xs text-red-400">
                      {errors.lastname?.message}
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
                    name="postalcode"
                    type="text"
                    placeholder="Postalcode"
                    {...register("postalcode")}
                  />
                  {errors.postalcode?.message && (
                    <p className="text-xs text-red-400">
                      {errors.postalcode?.message}
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
                    <div className="flex text-sm py-4">
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
                      <div className=" flex items-center justify-center">
                        <span className="font-bold">${prod.price}</span>
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
              <Button type="submit" className="w-full rounded-md shadow-md">
                Confirm Order
              </Button>
            </div>
          </article>
        </div>
      </div>
    </form>
  );
};

export default FormCheckout;
