import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/Components/ui/button";

const page = async () => {
  const resp = await fetch("http://localhost:4000/api/usersByAdmin");
  const data = await resp.json();
  console.log(data);
  return (
    <div>
      <h4>Users</h4>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>surname</TableHead>
            <TableHead>email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow>
              <TableCell>#{user.id_users}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.surname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <Button>Detail</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
