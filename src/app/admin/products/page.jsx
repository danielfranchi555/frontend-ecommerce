"use client";
import CartAddProd from "@/Components/Admin/cartAddProd/CartAddProd";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const Page = () => {
  const [products, setProducts] = useState(null);
  const [text, setText] = useState("");

  const getProducts = async () => {
    const resp = await fetch("http://localhost:4000/api/productsByAdmin");
    const data = await resp.json();
    setProducts(data);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const prods = text
    ? products.filter((prod) => prod.name_product.toLowerCase().includes(text))
    : products;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="m-2 border px-1 md:px-4 bg-gray-50 rounded-md shadow-sm">
      <div className="w-full flex items-center  py-4  justify-between">
        <h4 className="font-bold text-sm md:text-md">Products</h4>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search Product"
            value={text}
            onChange={handleChange}
          />
          <CartAddProd />
        </div>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Offert</TableHead>
            <TableHead>Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prods?.map((prod) => (
            <TableRow key={prod.id_product}>
              <TableCell className="w-[10px]">{prod.id_product}</TableCell>
              <TableCell className="w-[150px]">{prod.name_product}</TableCell>
              <TableCell className="w-[100px]">${prod.price}</TableCell>
              <TableCell
                className={`w-[100px] font-semibold ${
                  prod.total_stock > 0 ? "text-green-400" : "text-red"
                }`}
              >
                {prod.total_stock}
              </TableCell>
              <TableCell className="w-[10px]">
                {prod.offert === 1 ? "Si" : "No"}
              </TableCell>
              <TableCell className="w-[40px]">{prod.name_category}</TableCell>
              <TableCell className=" w-[100px]">
                <MdDelete size={25} className="cursor-pointer" />
              </TableCell>
              <TableCell className="w-[100px]">
                <Link href={`products/${prod.id_product}`}>
                  <Button>Edit</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
