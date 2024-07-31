import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/Components/ui/button";

const page = async () => {
  const resp = await fetch("http://localhost:4000/api/customers", {
    next: { revalidate: 3600 },
  });
  const data = await resp.json();

  return (
    <div className=" px-4 w-full">
      <h4 className="text-2xl font-bold py-4 ">Order List</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id order</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Detail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ id_order, order_date, name, email, total_amount }) => (
            <TableRow key={id_order}>
              <TableCell>{id_order}</TableCell>
              <TableCell>{order_date}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{total_amount}</TableCell>
              <TableCell>
                <Link href={`orders/${id_order}`}>
                  <Button>Detail</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
