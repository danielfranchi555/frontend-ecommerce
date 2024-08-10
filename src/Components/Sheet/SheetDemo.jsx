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
import Image from "next/image";
import Link from "next/link";
import { MdDeleteOutline } from "react-icons/md";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "@/app/redux/slices/ApiSlice/cartApiSlice";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const SheetDemo = ({ id_user }) => {
  //Get products from redux query
  const { data } = useGetProductsQuery(id_user);
  //Delete products from redux query
  const [deleteProduct] = useRemoveProductMutation();

  const totalQuantity = data?.reduce(
    (acc, prod) => (acc = acc + prod.quantity),
    0
  );
  const totalAmount = data?.reduce((acc, prod) => (acc = acc + prod.price), 0);

  const deleteProductFromCart = (id_item) => {
    deleteProduct({ user_id: id_user, id_cart_item: id_item });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative cursor-pointer">
          <FiShoppingBag size={22} />
          {totalQuantity > 0 && (
            <div
              className={`bg-[#0EA5E9] absolute -top-4 -right-3 rounded-full text-xs py-[4px] px-[8px] text-white transition-opacity duration-300 ${
                totalQuantity ? "opacity-100" : "opacity-0"
              }`}
            >
              {totalQuantity}
            </div>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="flex-grow-0 ">
        <SheetHeader className="px-4  items-start">
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div className="relative h-full ">
          {totalQuantity > 0 ? (
            <>
              <div className="grid gap-6 py-4 divide-y px-4">
                {data?.length > 0 &&
                  data?.map((item) => (
                    <div
                      key={item.id_product}
                      className="flex gap-2 items-center"
                    >
                      <Image
                        src={item.img_url}
                        width={50}
                        height={100}
                        alt="cart-image"
                        className="rounded-md drop-shadow-lg"
                      />
                      <div className="flex justify-between w-full">
                        <div className="text-sm">
                          <p className="flex items-center gap-2">
                            <span className="font-bold">Name:</span>
                            {item.name_product}
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="font-bold">Price:</span>$
                            {item.price}
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="font-bold">Quantity:</span>
                            {item.quantity}
                          </p>
                        </div>
                        <MdDeleteOutline
                          className="cursor-pointer"
                          size={22}
                          onClick={() =>
                            deleteProductFromCart(item.id_cart_item)
                          }
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="absolute bottom-0 w-full rounded-md ">
                <SheetFooter className="bg-slate-100 text-black w-full px-2 py-2  shadow-inner">
                  <div className="flex flex-col gap-2 justify-between w-full">
                    <div className="flex items-center justify-between">
                      <p>Total</p>
                      <span className="font-bold">${totalAmount}</span>
                    </div>
                    <p className="text-sm">
                      Shipping and taxes will be added at the next step
                    </p>
                    <SheetClose asChild className="w-full">
                      <Link href={"/checkout"}>
                        <Button
                          variant="default"
                          type="submit"
                          className="w-full"
                        >
                          Go to payment
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </SheetFooter>
              </div>
            </>
          ) : (
            <div className="flex w-full h-full justify-center items-center gap-4">
              <p className="text-1xl">Carrito Vacio</p>
              <MdOutlineRemoveShoppingCart size={25} />
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetDemo;
