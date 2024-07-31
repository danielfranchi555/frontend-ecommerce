"use client";
import { FiShoppingBag } from "react-icons/fi";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MdDeleteOutline } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SheetDemo = ({ id_user }) => {
  const [productsCart, setProductsCart] = useState([]);

  const getProductsCart = async () => {
    try {
      const resp = await fetch(
        `http://localhost:4000/api/cart/get-products/${id_user}`
      );

      if (!resp.ok) {
        console.log("error en la respuesta");
      } else {
        const products = await resp.json();
        setProductsCart(products);
      }
    } catch (error) {
      console.log("error");
    }
  };

  const deleteProductFromCart = async (id_cart_item) => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/cart/remove-product",
        {
          method: "DELETE",
          body: JSON.stringify({
            user_id: id_user,
            id_cart_item: id_cart_item,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setProductsCart((prev) =>
          prev.filter((item) => item.id_cart_item !== id_cart_item)
        );
        console.log("Product removed successfully", data);
      } else {
        console.error("Error removing product:", data);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const totalQuantity = productsCart?.reduce(
    (acc, prod) => acc + prod.quantity,
    0
  );

  const total = productsCart.reduce(
    (acc, prod) => acc + prod.price * prod.quantity,
    0
  );

  useEffect(() => {
    getProductsCart();
  }, [productsCart]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative cursor-pointer">
          <FiShoppingBag size={22} />
          {totalQuantity > 0 && (
            <div className="bg-[#0EA5E9] absolute -top-4  -right-3 rounded-full text-xs py-[4px] px-[8px] text-white ">
              {totalQuantity}
            </div>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        {totalQuantity > 0 ? (
          <>
            <div className="grid gap-6 py-4 divide-y ">
              {productsCart.length > 0 &&
                productsCart.map((item) => (
                  <div
                    key={item.id_product}
                    className="flex gap-2 items-center "
                  >
                    <Image
                      src={item.img_url}
                      width={50}
                      height={100}
                      alt="cart-image"
                      className=" rounded-md drop-shadow-lg"
                    />
                    <div className="flex justify-between w-full">
                      <div className="text-sm">
                        <p className="flex items-center gap-2">
                          <span className="font-bold">Name:</span>
                          {item.name_product}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="font-bold">Price:</span>${item.price}
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="font-bold">Quantity:</span>
                          {item.quantity}
                        </p>
                      </div>
                      <MdDeleteOutline
                        className="cursor-pointer"
                        size={22}
                        onClick={() => deleteProductFromCart(item.id_cart_item)}
                      />
                    </div>
                  </div>
                ))}
            </div>

            <SheetFooter className="absolute bottom-0 border ">
              <div className="flex flex-col gap-2 justify-between w-full">
                <div className="flex items-center justify-between">
                  <p>Total</p>
                  <span>${total}</span>
                </div>
                <p className="text-sm ">
                  Shipping and taxex will be added at the next step
                </p>
                <SheetClose asChild>
                  <Link href={"/checkout"}>
                    <Button variant="default" type="submit">
                      Go to payment
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetFooter>
          </>
        ) : (
          <p>Empy Cart</p>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SheetDemo;
